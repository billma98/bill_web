from PIL import Image
import os

# Define the source folder where images are located
image_folder = "../new/images/"

def convert_images_to_webp(folder):
    for root, _, files in os.walk(folder):  # Walk through all subdirectories
        for filename in files:
            if filename.endswith((".png", ".jpg")):
                image_path = os.path.join(root, filename)
                webp_path = os.path.join(root, os.path.splitext(filename)[0] + ".webp")
                
                # Convert image to WebP
                with Image.open(image_path) as img:
                    img.save(webp_path, "WEBP", quality=80)
                    print(f"Converted {filename} -> {os.path.basename(webp_path)}")
                
                # Optional: Remove the original file to save space
                # os.remove(image_path)
                
convert_images_to_webp(image_folder)
