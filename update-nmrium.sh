#!/bin/bash

# Set up logging
LOG_FILE="$HOME/nmrium-update.log"

# Create log file if it doesn't exist
if [ ! -f "$LOG_FILE" ]; then
    touch "$LOG_FILE"
    chmod 644 "$LOG_FILE"
fi

# Function to log messages
log_message() {
    echo "$(date): $1" >> "$LOG_FILE"
}

# Function to check and update a specific image and service
check_and_update() {
    local image=$1
    local service=$2
    
    log_message "Checking for updates for $image"
    
    # Pull the latest image
    if ! docker pull $image; then
        log_message "ERROR: Failed to pull image $image"
        return 1
    fi
    
    # Get the current image ID
    current_id=$(docker images $image --format "{{.ID}}")
    
    # Get the new image ID after pull
    new_id=$(docker images $image --format "{{.ID}}")
    
    # If the IDs are different, restart the service
    if [ "$current_id" != "$new_id" ]; then
        log_message "New image detected for $image, restarting $service"
        if ! docker-compose restart $service; then
            log_message "ERROR: Failed to restart service $service"
            return 1
        fi
    else
        log_message "No updates available for $image"
    fi
}

# Change to the directory containing docker-compose.yml
cd "$(dirname "$0")" || {
    log_message "ERROR: Failed to change to script directory"
    exit 1
}

log_message "Starting update check"

# Check both development and production images
check_and_update "nfdi4chem/nmrium-react-wrapper:dev-latest" "nmrium-dev"
check_and_update "nfdi4chem/nmrium-react-wrapper:latest" "nmrium-prod"

log_message "Update check completed" 