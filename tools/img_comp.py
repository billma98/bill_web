import os
import sys
from PIL import Image

def compress_images(input_folder):
    # Ensure the input folder exists
    if not os.path.exists(input_folder):
        print(f"Error: The folder '{input_folder}' does not exist.")
        return

    # Extract the last subfolder name for the output folder
    folder_name = os.path.basename(os.path.normpath(input_folder))
    output_folder = os.path.join(os.getcwd(), f"{folder_name}_compressed")
    
    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)
    
    print(f"Compressing images from '{input_folder}' to '{output_folder}'...\n")
    
    # Iterate over files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith((".jpg", ".jpeg", ".png")):
            try:
                img_path = os.path.join(input_folder, filename)
                img = Image.open(img_path)
                
                # Save the image with optimization and quality settings
                output_path = os.path.join(output_folder, filename)
                if filename.endswith((".jpg", ".jpeg")):
                    img.save(output_path, optimize=True, quality=50)  # JPEG: Quality set to 30
                elif filename.endswith(".png"):
                    img = img.convert("P", palette=Image.ADAPTIVE)  # PNG: Convert to palette-based (smaller size)
                    img.save(output_path, optimize=True, compress_level=9)
                
                print(f"Compressed: {filename}")
            except Exception as e:
                print(f"Error compressing {filename}: {e}")
    
    print("\nCompression complete!")

if __name__ == "__main__":
    # Ensure the script is called with an input folder argument
    if len(sys.argv) != 2:
        print("Usage: python compress_images.py <input_folder>")
        sys.exit(1)
    
    input_folder = sys.argv[1]
    compress_images(input_folder)
