import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

width, height = 1280, 720
img = Image.new("RGB", (width, height), "#080a10")
draw = ImageDraw.Draw(img)

# Background subtle dark sea/ocean base
# Generate a realistic coastal hypsometric map layout
# Left/central: continental coastline with elevation contours
# Right/lower: ocean with bathymetric lines and flooded contours

# 1. Subtle graticule grid
for x in range(0, width, 80):
    draw.line([(x, 0), (x, height)], fill=(255, 255, 255, 12), width=1)
for y in range(0, height, 80):
    draw.line([(0, y), (width, y)], fill=(255, 255, 255, 12), width=1)

# 2. Draw continent terrain contours (representing coastal lowlands & mountains)
# Let's create an organic terrain array
np.random.seed(42)
grid_w, grid_h = 320, 180
y_coords, x_coords = np.mgrid[0:grid_h, 0:grid_w]

# Distance from an organic coastline curve
coast_curve = 80 + 50 * np.sin(y_coords / 22.0) + 30 * np.cos(y_coords / 12.0) + 20 * np.sin(x_coords / 35.0)
elevation = (x_coords - coast_curve) * 0.9

# Add mountain ridges and coastal plain undulations
elevation += 35 * np.sin(x_coords / 15.0) * np.cos(y_coords / 18.0)
elevation += 15 * np.sin(y_coords / 8.0)

# Rescale to image
elevation_resized = np.array(Image.fromarray(elevation).resize((width, height), Image.Resampling.BILINEAR))

# Colors for hypsometry & sea level zones:
# < 0: Deep Ocean (#050b14)
# 0 to 1m: Inundação Imediata +1m (#0284c7)
# 1m to 7m: Inundação Severa +7m (#0ea5e9, 50% opacity)
# 7m to 30m: Inundação Crítica +30m (#38bdf8, 30% opacity)
# 30m to 70m: Derretimento Total +70m (#7dd3fc, 20% opacity)
# > 70m: Terra Firme Relevo (#1e293b to #334155 to #475569)

pixels = np.zeros((height, width, 3), dtype=np.uint8)

# Masking zones
ocean_mask = elevation_resized < 0
flood_1m = (elevation_resized >= 0) & (elevation_resized <= 6)
flood_7m = (elevation_resized > 6) & (elevation_resized <= 20)
flood_30m = (elevation_resized > 20) & (elevation_resized <= 45)
flood_70m = (elevation_resized > 45) & (elevation_resized <= 70)
land_safe = elevation_resized > 70

# Assign colors
pixels[ocean_mask] = [8, 18, 34]          # Profundo oceano escuro
pixels[flood_1m] = [2, 132, 199]          # +1m a +5m (Azul vibrante)
pixels[flood_7m] = [14, 165, 233]         # +7m a +20m
pixels[flood_30m] = [56, 189, 248]        # +30m
pixels[flood_70m] = [125, 211, 252]       # +70m cota máxima
# Safe land terrain gradient
elev_norm = np.clip((elevation_resized - 70) / 100.0, 0, 1)
land_r = (24 + elev_norm * 40).astype(np.uint8)
land_g = (34 + elev_norm * 45).astype(np.uint8)
land_b = (44 + elev_norm * 50).astype(np.uint8)
pixels[land_safe, 0] = land_r[land_safe]
pixels[land_safe, 1] = land_g[land_safe]
pixels[land_safe, 2] = land_b[land_safe]

base_img = Image.fromarray(pixels)
draw_overlay = ImageDraw.Draw(base_img)

# 3. Contour lines (Isohipsas e Isóbatas)
for level in [0, 5, 15, 30, 50, 70, 100, 140]:
    contour_mask = np.abs(elevation_resized - level) < 1.0
    ys, xs = np.where(contour_mask)
    if len(xs) > 0:
        # Sample points to draw subtle dashed or thin lines
        for x, y in zip(xs[::4], ys[::4]):
            col = (255, 255, 255, 40) if level > 0 else (56, 189, 248, 120)
            draw_overlay.point((x, y), fill=col[:3])

# 4. Vignette / Dark border gradient for high-end cartographic elegance
vignette = Image.new("RGBA", (width, height), (0, 0, 0, 0))
v_draw = ImageDraw.Draw(vignette)
v_draw.rectangle([(0, 0), (width, height)], outline=(255, 255, 255, 20), width=1)
v_draw.rectangle([(16, 16), (width - 16, height - 16)], outline=(255, 255, 255, 15), width=1)

base_img.paste(vignette, (0, 0), vignette)

# 5. Add Cartographic Badges & Editorial Typography
draw_final = ImageDraw.Draw(base_img)

# Coordinate marks on neatline border
for x in range(80, width - 80, 160):
    draw_final.line([(x, 12), (x, 20)], fill=(148, 163, 184), width=1)
    draw_final.line([(x, height - 20), (x, height - 12)], fill=(148, 163, 184), width=1)
for y in range(80, height - 80, 120):
    draw_final.line([(12, y), (20, y)], fill=(148, 163, 184), width=1)
    draw_final.line([(width - 20, y), (width - 12, y)], fill=(148, 163, 184), width=1)

# Top Bar Badge
draw_final.rectangle([(32, 32), (380, 72)], fill=(15, 23, 42, 220), outline=(56, 189, 248, 100), width=1)
draw_final.text((46, 44), "VITALEO // MODELO HIPSOMÉTRICO GLOBAL", fill=(56, 189, 248))

# Bottom Legend Card
draw_final.rectangle([(32, height - 150), (480, height - 32)], fill=(11, 15, 25, 230), outline=(255, 255, 255, 30), width=1)
draw_final.text((50, height - 138), "SIMULADOR DE ELEVAÇÃO DO NÍVEL DO MAR", fill=(255, 255, 255))
draw_final.text((50, height - 116), "COTAS DE INUNDAÇÃO: +1m • +7m • +30m • +70m (DERRETIMENTO TOTAL)", fill=(148, 163, 184))

# Color scale bar
scale_x = 50
scale_y = height - 80
draw_final.rectangle([(scale_x, scale_y), (scale_x + 80, scale_y + 16)], fill=(2, 132, 199))
draw_final.text((scale_x + 5, scale_y + 20), "+1m IPCC", fill=(148, 163, 184))

draw_final.rectangle([(scale_x + 85, scale_y), (scale_x + 165, scale_y + 16)], fill=(14, 165, 233))
draw_final.text((scale_x + 90, scale_y + 20), "+7m Groenlândia", fill=(148, 163, 184))

draw_final.rectangle([(scale_x + 170, scale_y), (scale_x + 250, scale_y + 16)], fill=(56, 189, 248))
draw_final.text((scale_x + 175, scale_y + 20), "+30m Parcial", fill=(148, 163, 184))

draw_final.rectangle([(scale_x + 255, scale_y), (scale_x + 355, scale_y + 16)], fill=(125, 211, 252))
draw_final.text((scale_x + 260, scale_y + 20), "+70m Antártica", fill=(148, 163, 184))

# Save image to both locations
base_img.save("assets/img/ferramentas/simulador-nivel-mar.jpg", quality=92)
base_img.save("public/assets/img/ferramentas/simulador-nivel-mar.jpg", quality=92)
print("Cover images saved successfully!")
