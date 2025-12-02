# start-all.ps1
# Usage: run from the repo root: .\start-all.ps1
# Starts backend and frontend each in a new PowerShell window (Windows dev helper).

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $repoRoot "backend"
$frontendPath = Join-Path $repoRoot "frontend"

Write-Host "Starting backend in a new window..."
Start-Process -FilePath "powershell" -ArgumentList "-NoExit","-Command","cd '$backendPath'; npm install; npm run dev"

Start-Sleep -Seconds 2

Write-Host "Starting frontend in a new window (with VITE_API_URL=http://localhost:4000)..."
Start-Process -FilePath "powershell" -ArgumentList "-NoExit","-Command","cd '$frontendPath'; `$env:VITE_API_URL='http://localhost:4000'; npm install; npm run dev"

Write-Host "Both processes started. Watch the new windows for logs."
