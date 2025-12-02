Deploy instructions for tulasiprasadk/rrnagar-coming-soon

Prerequisites
- Local: Node.js, npm (or pnpm/yarn) and rsync installed.
- Remote: SSH access, rsync installed on server. Ensure the SSH user can write to the website path and can run sudo chown if necessary.

Typical Vite build + deploy
1) Make the script executable:
   chmod +x deploy.sh

2) Dry-run (preview):
   ./deploy.sh --host deploy@1.2.3.4 --remote-path /var/www/rrnagar --build "npm ci && npm run build" --build-dir dist --dry-run

3) Real deploy:
   ./deploy.sh --host deploy@1.2.3.4 --remote-path /var/www/rrnagar --build "npm ci && npm run build" --build-dir dist

Notes
- The script creates a tar.gz backup on the remote under REMOTE_PATH/backups.
- By default the script expects the build output in 'dist' (Vite default). Change --build-dir if your project outputs elsewhere.
- The script excludes common development folders (.git, node_modules, .env).
- If your site uses server-side Node (server.mjs) instead of static files, we should modify the deploy to copy full repository and restart the service (pm2/systemd) rather than sync only dist/.

Rollback (manual)
- SSH to server and restore a backup:
  ssh user@host "cd /var/www/rrnagar && tar -xzf backups/site-backup-YYYYMMDD-HHMMSS.tar.gz -C /var/www/rrnagar && sudo chown -R www-data:www-data ."
