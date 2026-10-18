import os
import glob
from PIL import Image

files = glob.glob('public/assets/img/blog/*.*')

print(f"Total files: {len(files)}")

# Let's inspect all files and list them clearly
for f in sorted(files):
    fname = os.path.basename(f)
    im = Image.open(f)
    w, h = im.size
    print(f"{fname:<45} | {w:<5}x{h:<5} | {w/h:.2f}")
