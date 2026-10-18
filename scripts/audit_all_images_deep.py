import os
import glob
from PIL import Image, ImageStat

files = glob.glob('public/assets/img/blog/*.*')
print(f"Total images in public/assets/img/blog: {len(files)}")

report = []
for f in sorted(files):
    fname = os.path.basename(f)
    try:
        im = Image.open(f)
        w, h = im.size
        aspect = w / h
        
        # Convert to RGB to analyze colors
        rgb = im.convert('RGB')
        stat = ImageStat.Stat(rgb)
        
        # mean RGB
        mean_r, mean_g, mean_b = stat.mean[:3]
        mean_brightness = (mean_r + mean_g + mean_b) / 3
        
        # check if it's grayscale or close to grayscale
        diff_rg = abs(mean_r - mean_g)
        diff_gb = abs(mean_g - mean_b)
        diff_rb = abs(mean_r - mean_b)
        is_grayscale = (diff_rg < 5 and diff_gb < 5 and diff_rb < 5)
        
        # check white paper characteristics: high brightness, low saturation, portrait or vertical
        # A scanned paper is typically: vertical (aspect < 0.9), mostly white (brightness > 200), nearly grayscale
        is_suspicious_paper = False
        reasons = []
        
        if aspect < 0.9:
            reasons.append(f"portrait aspect={aspect:.2f}")
        if mean_brightness > 200:
            reasons.append(f"high brightness={mean_brightness:.1f}")
        if is_grayscale:
            reasons.append("grayscale/monochrome")
            
        report.append({
            'file': fname,
            'size': f"{w}x{h}",
            'aspect': round(aspect, 2),
            'brightness': round(mean_brightness, 1),
            'grayscale': is_grayscale,
            'reasons': reasons
        })
    except Exception as e:
        report.append({
            'file': fname,
            'error': str(e)
        })

print("\n--- ALL IMAGES WITH PORTRAIT ASPECT OR HIGH BRIGHTNESS OR GRAYSCALE ---")
for r in report:
    if len(r.get('reasons', [])) >= 2 or r.get('aspect', 1) < 0.85:
        print(f"{r['file']:<45} | size: {r['size']:<12} | reasons: {', '.join(r['reasons'])}")

print("\n--- ALL IMAGES SUMMARY ---")
for r in report:
    print(f"{r['file']:<45} | {r.get('size','ERR'):<10} | asp: {r.get('aspect','?'):<5} | bri: {r.get('brightness','?'):<5} | gray: {r.get('grayscale','?')}")
