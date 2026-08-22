import os
from PIL import Image

def remove_white_background(image_path):
    img = Image.open(image_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is close to white
        # R, G, B > 240 is considered white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Save as PNG
    new_path = os.path.splitext(image_path)[0] + ".png"
    img.save(new_path, "PNG")
    
    if image_path != new_path:
        os.remove(image_path)
    return new_path

logo_dir = r"c:\Users\kaust\Downloads\paris-startup-map\public\logos"
for file in os.listdir(logo_dir):
    if file.endswith(('.png', '.jpg', '.jpeg')):
        try:
            remove_white_background(os.path.join(logo_dir, file))
            print(f"Processed {file}")
        except Exception as e:
            print(f"Failed {file}: {e}")
