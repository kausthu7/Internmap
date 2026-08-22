import os
import shutil
import re

media_dir = r"c:\Users\kaust\Downloads\paris-startup-map\temp_excel_extract\xl\media"
out_dir = r"c:\Users\kaust\Downloads\paris-startup-map\public\logos"

os.makedirs(out_dir, exist_ok=True)

ordered_ids = [
    'alan', 'pigment', 'back-market', 'qonto', 'blablacar', 'malt', 'skello', 'aircall', 'voodoo', 'quandela',
    'daisy', 'roundtable', 'rollee', 'iqgeo', 'wakoo', 'zeplug', 'neosilver', 'estuaire', 'blissim', 'doctolib',
    'garantme', 'cest-qui-le-patron', 'tabomine', 'proton', 'oneflash'
]

# Get images and sort by the number in 'imageX.ext'
images = [f for f in os.listdir(media_dir) if f.startswith('image')]
images.sort(key=lambda x: int(re.search(r'\d+', x).group()))

for i, img in enumerate(images):
    if i < len(ordered_ids):
        startup_id = ordered_ids[i]
        ext = img.split('.')[-1]
        
        src = os.path.join(media_dir, img)
        dst = os.path.join(out_dir, f"{startup_id}.{ext}")
        shutil.copy2(src, dst)
        print(f"Copied {img} to {startup_id}.{ext}")
