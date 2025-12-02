#!/usr/bin/env bash
# Safe deploy script for a Vite frontend (rsync over SSH)
# Usage:
#   ./deploy.sh --host user@server --remote-path /var/www/site --build "npm ci && npm run build" --build-dir dist --migrate ""
# Supports --dry-run to preview rsync.
set -euo pipefail

DRY_RUN=false
SSH_HOST=""
REMOTE_PATH=""
BUILD_CMD="npm ci && npm run build"
BUILD_DIR="dist"
MIGRATE_CMD=""

RSYNC_EXCLUDES=(".git" "node_modules" "vendor" ".env" "backups" "dist/.DS_Store")

function usage() {
  cat <<EOF
deploy.sh - safe deploy via rsync over SSH (Vite/Node)
Options:
  --host user@server        SSH destination (required)
  --remote-path /path/to/site   Destination path on server (required)
  --build "cmd"             Local build command to run before transfer (default: $BUILD_CMD)
  --build-dir dir           Directory to rsync to remote (default: $BUILD_DIR)
  --migrate "cmd"           Remote migrate command to run via SSH after deploy (optional)
  --dry-run                 Run rsync with --dry-run
  -h|--help                 Show this help
EOF
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --host) SSH_HOST="$2"; shift 2;;
    --remote-path) REMOTE_PATH="$2"; shift 2;;
    --build) BUILD_CMD="$2"; shift 2;;
    --build-dir) BUILD_DIR="$2"; shift 2;;
    --migrate) MIGRATE_CMD="$2"; shift 2;;
    --dry-run) DRY_RUN=true; shift;;
    -h|--help) usage;;
    *) echo "Unknown arg: $1"; usage;;
  esac
 done

if [[ -z "$SSH_HOST" || -z "$REMOTE_PATH" ]]; then
  echo "Error: --host and --remote-path are required."
  usage
fi

timestamp() { date +"%Y%m%d-%H%M%S"; }

echo "Starting deploy at $(date)."
echo "Host: $SSH_HOST"
echo "Remote path: $REMOTE_PATH"
echo "Build command: $BUILD_CMD"
echo "Build dir: $BUILD_DIR"
if $DRY_RUN; then echo "DRY RUN mode enabled"; fi

# 1) Run local build
if [[ -n "$BUILD_CMD" ]]; then
  echo "Running local build: $BUILD_CMD"
  eval "$BUILD_CMD"
fi

# Validate build dir
if [[ ! -d "$BUILD_DIR" ]]; then
  echo "Error: build directory '$BUILD_DIR' not found. Aborting."
  exit 2
fi

# 2) Create a remote backup (tar)
BACKUP_NAME="site-backup-$(timestamp).tar.gz"
REMOTE_BACKUP_DIR="${REMOTE_PATH%/}/backups"
echo "Creating backup on remote: $REMOTE_BACKUP_DIR/$BACKUP_NAME"
ssh "$SSH_HOST" "mkdir -p '$REMOTE_BACKUP_DIR' && tar -czf '$REMOTE_BACKUP_DIR/$BACKUP_NAME' -C '${REMOTE_PATH%/}' ."

# 3) Rsync build dir to remote (deploy dist to webroot)
RSYNC_ARGS=(-avz --delete)
for ex in "${RSYNC_EXCLUDES[@]}"; do
  RSYNC_ARGS+=(--exclude="$ex")
done
if $DRY_RUN; then RSYNC_ARGS+=(--dry-run); fi

echo "Transferring files with rsync from '$BUILD_DIR' to '$SSH_HOST:$REMOTE_PATH' ..."
rsync "${RSYNC_ARGS[@]}" "$BUILD_DIR"/ "$SSH_HOST":"$REMOTE_PATH"/

# 4) Set recommended permissions (adjust user/group as needed)
echo "Applying permissions on remote (attempting www-data:www-data). Change as required."
ssh "$SSH_HOST" "sudo chown -R www-data:www-data '$REMOTE_PATH' || true"

# 5) Run remote migrations/commands if provided
if [[ -n "$MIGRATE_CMD" ]]; then
  echo "Running remote command: $MIGRATE_CMD"
  ssh "$SSH_HOST" "cd '$REMOTE_PATH' && $MIGRATE_CMD"
fi

echo "Deploy finished at $(date)."
echo "Remote backup stored at: $REMOTE_BACKUP_DIR/$BACKUP_NAME"
if $DRY_RUN; then
  echo "Dry-run completed. No files were changed on the remote."
fi
