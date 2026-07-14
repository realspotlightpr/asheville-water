from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "images"
OUTPUT = ROOT / "public" / "gallery"
OUTPUT.mkdir(parents=True, exist_ok=True)

FILES = {
    "IMG_7259-rotated.jpeg": "dual-tank-whole-home-water-system.webp",
    "68dd959ea88eab8d4a87b981_IMG_2480-2.jpeg": "tankless-reverse-osmosis-under-sink.webp",
    "IMG_0752-rotated.jpeg": "finished-dual-tank-water-treatment.webp",
    "20260228_112455-rotated.jpg": "compact-whole-home-water-softener.webp",
    "68dd9702330a94f46a5a590b_PHOTO-2025-08-13-16-11-50-1.jpg": "under-sink-reverse-osmosis-installation.webp",
    "20260304_121159-rotated-e1773939303245.jpg": "independent-dual-valve-water-system.webp",
    "20260312_132817-rotated-e1773939088179.jpg": "garage-water-softener-installation.webp",
    "68dd972deb9c47f96ea63b1d_IMG_0672.jpeg": "outdoor-water-treatment-equipment.webp",
    "68dd95d2deaa65167e71b6de_40f6e6a0-598b-4267-9a22-645324a1a52f-p-2000.jpg": "city-water-treatment-garage.webp",
    "IMG_0423-rotated.jpeg": "water-softener-near-tankless-heater.webp",
    "68dd966425f04417026c311b_IMG_1721-e1773938835339.jpeg": "space-conscious-garage-water-system.webp",
    "68dd977d88738263d4a4189c_PHOTO-2025-08-20-13-39-38.jpg": "whole-home-water-system-detail.webp",
    "68dd977d9a8e75f2db16b380_IMG_2159.jpeg": "professional-water-system-plumbing.webp",
    "68dd977dc9c0720ca82f3039_IMG_0507.jpeg": "complete-residential-water-treatment.webp",
    "68dd977dd748fa6a5f4fb31d_PHOTO-2025-08-16-16-24-19.jpg": "garage-water-filtration-project.webp",
    "68dd98e9c3dd873580526cb7_PHOTO-2025-09-30-11-35-36.jpg": "western-nc-water-system-installation.webp",
    "68dd99919faec3c94a8f8a40_IMG_0800.jpeg": "water-treatment-control-valve-detail.webp",
    "20260314_122945-rotated-e1773939116196.jpg": "single-tank-water-softener.webp",
}

created = 0
skipped = 0

for source_name, output_name in FILES.items():
    output_path = OUTPUT / output_name
    # Published gallery files may include approved white-label retouching. Keep
    # those derivatives unless they are intentionally removed first.
    if output_path.exists():
        skipped += 1
        continue

    with Image.open(SOURCE / source_name) as source:
        image = ImageOps.exif_transpose(source).convert("RGB")
        image.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
        image.save(output_path, "WEBP", quality=78, method=6)
        created += 1

print(f"Created {created} gallery images and preserved {skipped} existing white-label assets in {OUTPUT}")
