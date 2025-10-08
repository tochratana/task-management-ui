#!/bin/bash

# Stop the script if any command fails
set -e

# Get current date and time
DATE=$(date +"%Y-%m-%d %H:%M:%S")

# Use a default commit message if none is provided
MESSAGE=${1:-"Commit on $DATE"}

# Show what the script is doing
echo "🌀 Adding changes..."
git add .

echo "📝 Committing changes with message: $MESSAGE"
git commit -m "$MESSAGE"

echo "🚀 Pushing to repository..."
git push origin main

echo "✅ Done! Changes pushed successfully at $DATE"
