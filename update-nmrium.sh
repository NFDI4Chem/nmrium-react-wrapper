#!/bin/bash

# Set up logging
LOG_FILE="/var/log/nmrium-update.log"
echo "$(date): Starting update check" >> "$LOG_FILE"

# Function to check and update a specific image and service
check_and_update() {
    local image=$1
    local service=$2
    
    echo "$(date): Checking for updates for $image" >> "$LOG_FILE"
    
    # Pull the latest image
    docker pull $image
    
    # Get the current image ID
    current_id=$(docker images $image --format "{{.ID}}")
    
    # Get the new image ID after pull
    new_id=$(docker images $image --format "{{.ID}}")
    
    # If the IDs are different, restart the service
    if [ "$current_id" != "$new_id" ]; then
        echo "$(date): New image detected for $image, restarting $service" >> "$LOG_FILE"
        docker-compose restart $service
    else
        echo "$(date): No updates available for $image" >> "$LOG_FILE"
    fi
}

# Change to the directory containing docker-compose.yml
cd "$(dirname "$0")"

# Check both development and production images
check_and_update "nfdi4chem/nmrium-react-wrapper:dev-latest" "nmrium-dev"
check_and_update "nfdi4chem/nmrium-react-wrapper:latest" "nmrium-prod"

echo "$(date): Update check completed" >> "$LOG_FILE" 