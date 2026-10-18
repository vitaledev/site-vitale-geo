import os
import re
import urllib.request
from PIL import Image

with open('assets/js/posts.js', 'r', encoding='utf-8') as f:
    text = f.read()

entries = re.findall(r'\{\s*titulo:\s*"([^"]+)",\s*categoria:\s*"([^"]+)",\s*data:\s*"([^"]+)",\s*img:\s*"([^"]+)",\s*link:\s*"([^"]+)/"', text)

print(f"Total entries in posts.js: {len(entries)}")

for titulo, cat, data, img_url, slug in entries:
    local_p = os.path.join('public/assets/img/blog', f"{slug}.jpg")
    local_png = os.path.join('public/assets/img/blog', f"{slug}.png")
    
    target_local = None
    if os.path.exists(local_p):
        target_local = local_p
    elif os.path.exists(local_png):
        target_local = local_png
        
    local_info = "MISSING"
    if target_local:
        try:
            im = Image.open(target_local)
            local_info = f"{im.size[0]}x{im.size[1]} ({im.size[0]/im.size[1]:.2f})"
        except Exception as e:
            local_info = f"ERROR: {e}"
            
    print(f"{slug:<35} | {local_info:<16} | {img_url}")
