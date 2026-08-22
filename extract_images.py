import zipfile
import os
import shutil

xlsx_path = r"c:\Users\kaust\Downloads\paris-startup-map\Paris 25 startups details.xlsx"
extract_dir = r"c:\Users\kaust\Downloads\paris-startup-map\temp_excel_extract"

if os.path.exists(extract_dir):
    shutil.rmtree(extract_dir)
os.makedirs(extract_dir)

with zipfile.ZipFile(xlsx_path, 'r') as zip_ref:
    zip_ref.extractall(extract_dir)

media_dir = os.path.join(extract_dir, 'xl', 'media')
if os.path.exists(media_dir):
    images = os.listdir(media_dir)
    print(f"Found {len(images)} images in xl/media:")
    for img in images:
        print(img)
else:
    print("No xl/media directory found in the Excel file.")
