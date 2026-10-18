import re
import os
import urllib.request
from PIL import Image

with open('assets/js/posts.js', 'r', encoding='utf-8') as f:
    text = f.read()

entries = re.findall(r'\{\s*titulo:\s*"([^"]+)",\s*categoria:\s*"([^"]+)",\s*data:\s*"([^"]+)",\s*img:\s*"([^"]+)",\s*link:\s*"([^"]+)/"', text)
print(f"Total posts: {len(entries)}")

# Let's inspect each local image vs the URL in posts.js
discrepancies = []
for titulo, cat, data, img_url, slug in entries:
    local_jpg = os.path.join('public/assets/img/blog', f"{slug}.jpg")
    local_png = os.path.join('public/assets/img/blog', f"{slug}.png")
    
    local_file = None
    if os.path.exists(local_jpg):
        local_file = local_jpg
    elif os.path.exists(local_png):
        local_file = local_png
        
    if not local_file:
        print(f"MISSING LOCAL: {slug}")
        continue
        
    im = Image.open(local_file)
    w, h = im.size
    aspect = w / h
    
    # Check if image looks like a document/book/paper:
    # 1. Height > Width significantly (aspect < 0.85)
    # 2. Or very small size or corrupted
    print(f"{slug:<35} | {w}x{h} (asp: {aspect:.2f}) | {img_url.split('/')[-1]}")
