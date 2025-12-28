#!/usr/bin/env python3
"""
Script to extract thumbnails from video files and save them in the images folder.
The thumbnails will be named after the video files (e.g., intro.mp4 -> intro.jpg)

Requirements:
    pip install opencv-python pillow

Usage:
    python extract_video_thumbnails.py
"""

import os
import cv2
from pathlib import Path

def extract_thumbnail(video_path: str, output_path: str, frame_time: float = 1.0):
    """
    Extract a thumbnail from a video at a specific time.
    
    Args:
        video_path: Path to the input video file
        output_path: Path where the thumbnail will be saved
        frame_time: Time in seconds to extract the frame (default: 1 second)
    """
    try:
        # Open the video file
        cap = cv2.VideoCapture(video_path)
        
        if not cap.isOpened():
            print(f"Error: Could not open video file: {video_path}")
            return False
        
        # Get video FPS
        fps = cap.get(cv2.CAP_PROP_FPS)
        if fps == 0:
            print(f"Warning: Could not get FPS for {video_path}, using frame 30")
            frame_number = 30
        else:
            # Calculate frame number based on time
            frame_number = int(frame_time * fps)
        
        # Set the video position to the desired frame
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
        
        # Read the frame
        ret, frame = cap.read()
        
        if not ret:
            # If frame at specified time doesn't exist, try to get first frame
            cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
            ret, frame = cap.read()
            if not ret:
                print(f"Error: Could not read frame from {video_path}")
                cap.release()
                return False
        
        # Resize if needed (optional - keep original size)
        # You can uncomment and adjust if you want to resize thumbnails
        # height, width = frame.shape[:2]
        # if height > 720:
        #     scale = 720 / height
        #     new_width = int(width * scale)
        #     frame = cv2.resize(frame, (new_width, 720))
        
        # Save the frame as JPEG
        cv2.imwrite(output_path, frame, [cv2.IMWRITE_JPEG_QUALITY, 90])
        
        cap.release()
        print(f"✓ Extracted thumbnail: {output_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {video_path}: {str(e)}")
        return False

def main():
    # Define paths
    videos_dir = Path("public/videos")
    images_dir = Path("public/images")
    
    # Create images directory if it doesn't exist
    images_dir.mkdir(parents=True, exist_ok=True)
    
    # Check if videos directory exists
    if not videos_dir.exists():
        print(f"Error: Videos directory not found: {videos_dir}")
        return
    
    # Get all video files
    video_files = list(videos_dir.glob("*.mp4"))
    
    if not video_files:
        print(f"No video files found in {videos_dir}")
        return
    
    print(f"Found {len(video_files)} video file(s)")
    print("-" * 50)
    
    # Process each video file
    success_count = 0
    for video_file in video_files:
        # Generate output filename (same name as video but with .jpg extension)
        video_name = video_file.stem  # Get filename without extension
        output_file = images_dir / f"{video_name}.jpg"
        
        # Skip if thumbnail already exists
        if output_file.exists():
            print(f"⊘ Thumbnail already exists: {output_file.name}")
            continue
        
        # Extract thumbnail
        if extract_thumbnail(str(video_file), str(output_file)):
            success_count += 1
    
    print("-" * 50)
    print(f"Completed! Successfully extracted {success_count} thumbnail(s)")
    
    # List all generated thumbnails
    if success_count > 0:
        print("\nGenerated thumbnails:")
        for video_file in video_files:
            video_name = video_file.stem
            thumbnail_file = images_dir / f"{video_name}.jpg"
            if thumbnail_file.exists():
                print(f"  - {thumbnail_file}")

if __name__ == "__main__":
    main()

