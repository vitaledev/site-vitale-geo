import os
import math
from PIL import Image, ImageDraw, ImageFont

publisher_dir = os.path.join(os.path.dirname(__file__), '..', 'assets', 'img', 'publisher')
os.makedirs(publisher_dir, exist_ok=True)

# -------------------------------------------------------------
# 1. LOGO QUADRADO 1000x1000 (Renderizado em 2000x2000 com supersampling)
# -------------------------------------------------------------
size = 2000
img = Image.new('RGBA', (size, size), (9, 10, 15, 255)) # #090a0f
draw = ImageDraw.Draw(img)

cx, cy = size // 2, size // 2 - 80
r = 650

# Brilho sutil de fundo
for br in range(r + 150, r - 50, -10):
    alpha = int(25 * (1 - (br - (r - 50)) / 200))
    if alpha > 0:
        draw.ellipse([cx - br, cy - br, cx + br, cy + br], outline=(245, 158, 11, alpha), width=3)

# Círculo externo do globo
draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(245, 158, 11, 255), width=36) # #f59e0b

# Linhas de latitude (horizontais curvas)
lat_offset_1 = int(r * 0.45)
lat_offset_2 = int(r * 0.75)

# Linha do equador
draw.line([cx - r + 15, cy, cx + r - 15, cy], fill=(245, 158, 11, 230), width=24)

# Paralelos (elipses parciais ou retângulos limitadores)
draw.arc([cx - r + 30, cy - lat_offset_1 - 100, cx + r - 30, cy - lat_offset_1 + 100], start=0, end=360, fill=(245, 158, 11, 160), width=18)
draw.arc([cx - r + 30, cy + lat_offset_1 - 100, cx + r - 30, cy + lat_offset_1 + 100], start=0, end=360, fill=(245, 158, 11, 160), width=18)
draw.arc([cx - r + 150, cy - lat_offset_2 - 70, cx + r - 150, cy - lat_offset_2 + 70], start=0, end=360, fill=(245, 158, 11, 120), width=16)
draw.arc([cx - r + 150, cy + lat_offset_2 - 70, cx + r - 150, cy + lat_offset_2 + 70], start=0, end=360, fill=(245, 158, 11, 120), width=16)

# Meridianos (elipses verticais de longitude)
rx_inner1 = int(r * 0.65)
rx_inner2 = int(r * 0.32)
draw.ellipse([cx - rx_inner1, cy - r + 10, cx + rx_inner1, cy + r - 10], outline=(245, 158, 11, 200), width=22)
draw.ellipse([cx - rx_inner2, cy - r + 10, cx + rx_inner2, cy + r - 10], outline=(245, 158, 11, 180), width=20)
# Meridiano central
draw.line([cx, cy - r + 15, cx, cy + r - 15], fill=(245, 158, 11, 230), width=24)

# Ponto focal no centro (azul vibrante)
pr = 65
draw.ellipse([cx - pr, cy - pr, cx + pr, cy + pr], fill=(59, 130, 246, 255)) # #3b82f6
draw.ellipse([cx - pr - 15, cy - pr - 15, cx + pr + 15, cy + pr + 15], outline=(96, 165, 250, 180), width=8)

# Texto "VitaleGeo" abaixo do globo
font_path = "C:\\Windows\\Fonts\\segoeuib.ttf"
try:
    font_title = ImageFont.truetype(font_path, 160)
    font_sub = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 64)
except Exception:
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()

text_v = "Vitale"
text_g = "Geo"
bbox_v = font_title.getbbox(text_v)
bbox_g = font_title.getbbox(text_g)
w_v = bbox_v[2] - bbox_v[0]
w_g = bbox_g[2] - bbox_g[0]
total_w = w_v + w_g + 10
start_x = (size - total_w) // 2
text_y = cy + r + 110

draw.text((start_x, text_y), text_v, font=font_title, fill=(255, 255, 255, 255))
draw.text((start_x + w_v + 10, text_y), text_g, font=font_title, fill=(245, 158, 11, 255))

sub_text = "GEOPOLÍTICA & CARTOGRAFIA"
bbox_sub = font_sub.getbbox(sub_text)
w_sub = bbox_sub[2] - bbox_sub[0]
draw.text(((size - w_sub) // 2, text_y + 190), sub_text, font=font_sub, fill=(148, 163, 184, 255))

# Redimensionar para 1000x1000 de alta qualidade
square_1000 = img.resize((1000, 1000), Image.Resampling.LANCZOS)
out_square = os.path.join(publisher_dir, 'logo-publisher-square-1000.png')
square_1000.save(out_square, 'PNG')
print('[OK] Logo quadrado gerado:', out_square)


# -------------------------------------------------------------
# 2. LOGO RETANGULAR / WIDE 800x200 (Renderizado em 1600x400)
# -------------------------------------------------------------
w_wide, h_wide = 1600, 400
img_w = Image.new('RGBA', (w_wide, h_wide), (9, 10, 15, 255))
draw_w = ImageDraw.Draw(img_w)

gcx, gcy = 220, 200
gr = 140

# Globo compacto
draw_w.ellipse([gcx - gr, gcy - gr, gcx + gr, gcy + gr], outline=(245, 158, 11, 255), width=10)
draw_w.line([gcx - gr + 5, gcy, gcx + gr - 5, gcy], fill=(245, 158, 11, 220), width=6)
draw_w.line([gcx, gcy - gr + 5, gcx, gcy + gr - 5], fill=(245, 158, 11, 220), width=6)
draw_w.ellipse([gcx - int(gr * 0.6), gcy - gr + 5, gcx + int(gr * 0.6), gcy + gr - 5], outline=(245, 158, 11, 180), width=6)
draw_w.ellipse([gcx - int(gr * 0.3), gcy - gr + 5, gcx + int(gr * 0.3), gcy + gr - 5], outline=(245, 158, 11, 150), width=5)
draw_w.ellipse([gcx - 16, gcy - 16, gcx + 16, gcy + 16], fill=(59, 130, 246, 255))

# Tipografia
font_wide_title = ImageFont.truetype(font_path, 150)
font_wide_sub = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 46)

tx = 420
ty = 90
bbox_wv = font_wide_title.getbbox(text_v)
w_wv = bbox_wv[2] - bbox_wv[0]

draw_w.text((tx, ty), text_v, font=font_wide_title, fill=(255, 255, 255, 255))
draw_w.text((tx + w_wv + 10, ty), text_g, font=font_wide_title, fill=(245, 158, 11, 255))

sub_text_w = "DOSSIES TERRITORIAIS & CARTOGRAFIA"
draw_w.text((tx + 5, ty + 165), sub_text_w, font=font_wide_sub, fill=(148, 163, 184, 255))

wide_800 = img_w.resize((800, 200), Image.Resampling.LANCZOS)
out_wide = os.path.join(publisher_dir, 'logo-publisher-wide-800x200.png')
wide_800.save(out_wide, 'PNG')
print('[OK] Logo horizontal gerado:', out_wide)
