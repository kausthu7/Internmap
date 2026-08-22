import openpyxl
import os
import shutil

wb = openpyxl.load_workbook(r"c:\Users\kaust\Downloads\paris-startup-map\Paris 25 startups details.xlsx")
ws = wb.active

out_dir = r"c:\Users\kaust\Downloads\paris-startup-map\public\logos"
os.makedirs(out_dir, exist_ok=True)

# List out the companies from startups.ts to map them
# Order based on the screenshot: Alan, Pigment, Back Market, Qonto, BlaBlaCar, Malt, Skello, Aircall, Voodoo, Quandela, Daisy, Roundtable, Rollee, Deepomatic(IQGeo), Wakoo, ZEPLUG, Neosilver, Estuaire, Blissim, Doctolib, Garantme, C'est qui le Patron, Tabomine, Proton, OneFlash

ordered_ids = [
    'alan', 'pigment', 'back-market', 'qonto', 'blablacar', 'malt', 'skello', 'aircall', 'voodoo', 'quandela',
    'daisy', 'roundtable', 'rollee', 'iqgeo', 'wakoo', 'zeplug', 'neosilver', 'estuaire', 'blissim', 'doctolib',
    'garantme', 'cest-qui-le-patron', 'tabomine', 'proton', 'oneflash'
]

# We assume images are ordered by row.
# Let's collect them
images_with_rows = []
for image in ws._images:
    row = image.anchor._from.row + 1
    images_with_rows.append((row, image))

# Sort by row
images_with_rows.sort(key=lambda x: x[0])

# Map to ordered IDs and save
for i, (row, image) in enumerate(images_with_rows):
    if i < len(ordered_ids):
        startup_id = ordered_ids[i]
        ext = 'png' if image.format == 'png' else 'jpg'
        if image.format == 'jpeg': ext = 'jpg'
        
        filepath = os.path.join(out_dir, f"{startup_id}.{ext}")
        with open(filepath, 'wb') as f:
            f.write(image.ref.getvalue())
        print(f"Saved {startup_id}.{ext} for row {row}")
