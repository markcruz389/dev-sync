# Run chmod +x dev.sh to make it executable

#!/bin/bash
set -e

echo "🧹 Stopping any existing containers..."
docker compose -f docker-compose.dev.yml down --remove-orphans

echo "🚀 Starting Hono dev environment (API + Postgres)..."
docker compose --env-file .env.development -f docker-compose.dev.yml up --build

