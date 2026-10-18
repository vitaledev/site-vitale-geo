import os
from PIL import Image

blog_dir = r"D:\Dev\vitale-geo\public\assets\img\blog"

files = os.listdir(blog_dir)
print(f"Total de imagens no diretorio: {len(files)}\n")

for f in sorted(files):
    path = os.path.join(blog_dir, f)
    size_kb = os.path.getsize(path) / 1024
    status = "OK"
    dims = "N/A"
    mode = "N/A"
    format_name = "N/A"
    
    # Verifica se e texto/svg
    with open(path, "rb") as fp:
        header = fp.read(100)
        if b"<?xml" in header or b"<svg" in header or b"<!DOCTYPE" in header:
            status = "INVALID_SVG_TEXT"
            
    if status == "OK":
        try:
            with Image.open(path) as im:
                dims = f"{im.width}x{im.height}"
                mode = im.mode
                format_name = im.format
                aspect = im.width / im.height
                if aspect < 0.6 or aspect > 2.5:
                    status = f"EXTREME_ASPECT ({aspect:.2f})"
        except Exception as e:
            status = f"ERROR: {e}"
            
    print(f"{f:<40} | {size_kb:>8.1f} KB | {dims:<12} | {format_name:<6} | {status}")
