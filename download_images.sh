#!/bin/bash

mkdir -p src/images

while IFS= read -r url; do
  # Extract the photo ID from the URL
  photo_id=$(echo "$url" | grep -o 'photo-[^?]*')
  
  # Skip if photo_id is empty
  if [ -z "$photo_id" ]; then
    continue
  fi
  
  # Download the image
  echo "Downloading $photo_id"
  curl -s "$url" -o "src/images/${photo_id}.jpg"
done < image_urls.txt

echo "All images downloaded to src/images/"
