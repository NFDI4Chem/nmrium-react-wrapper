#!/bin/bash

set -e
set -o pipefail
set -u

LOG_FILE="$HOME/nmrium-update.log"

# Create log file if it doesn't exist
if [ ! -f "$LOG_FILE" ]; then
    touch "$LOG_FILE"
    chmod 644 "$LOG_FILE"
fi

# Logging function
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG_FILE"
}

log_message "🔄 Starting Docker Compose update process..."

# Move to project directory
PROJECT_DIR="/mnt/data/nmrium-react-wrapper"
log_message "📂 Changing directory to $PROJECT_DIR"
cd "$PROJECT_DIR"

# Pull latest deployment files
log_message "🔄 Performing git pull to sync deployment files..."
git pull origin prod-helm-deploy
log_message "✅ Git pull completed."

# Define services and their images
declare -A SERVICE_IMAGES
SERVICE_IMAGES["nmrium-dev"]="nfdi4chem/nmrium-react-wrapper:dev-latest"
SERVICE_IMAGES["nmrium-prod"]="nfdi4chem/nmrium-react-wrapper:latest"

# Track services with updated images
UPDATED_SERVICES=()

for service in "${!SERVICE_IMAGES[@]}"; do
    image="${SERVICE_IMAGES[$service]}"
    log_message "📥 Checking for updates on $image"

    if [ "$(docker pull "$image" | grep -c "Status: Image is up to date")" -eq 0 ]; then
        log_message "✅ New image detected for $service"
        UPDATED_SERVICES+=("$service")
    else
        log_message "🔎 Image for $service is up to date"
    fi
done

# Recreate only changed services
if [ "${#UPDATED_SERVICES[@]}" -gt 0 ]; then
    for service in "${UPDATED_SERVICES[@]}"; do
        log_message "🚀 Recreating container for $service with updated image..."
        docker compose up -d --force-recreate --no-deps "$service"
    done
else
    log_message "✅ No new images detected. Skipping container recreation."
fi

# Cleanup
log_message "🧹 Cleaning up dangling images..."
docker image prune -f

log_message "✅ Update process completed."
