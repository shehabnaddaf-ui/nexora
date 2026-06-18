from collections import deque

from PIL import Image

SRC = r"e:\nexora\src\assets\logo-emblem.png"
OUT = r"e:\nexora\src\assets\logo-emblem-transparent.png"


def luminance(r: int, g: int, b: int) -> float:
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def saturation(r: int, g: int, b: int) -> float:
    mx, mn = max(r, g, b), min(r, g, b)
    if mx == 0:
        return 0.0
    return (mx - mn) / mx


def is_background(r: int, g: int, b: int) -> bool:
    lum = luminance(r, g, b)
    sat = saturation(r, g, b)
    peak = max(r, g, b)

    if peak < 55 and sat < 0.35:
        return True
    if lum < 38 and b < r + 12:
        return True
    if lum < 28:
        return True
    return False


def flood_remove_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    pixels = img.load()
    removed = [[False] * h for _ in range(w)]
    queue = deque()

    def try_add(x: int, y: int) -> None:
        if x < 0 or y < 0 or x >= w or y >= h or removed[x][y]:
            return
        r, g, b, _ = pixels[x, y]
        if is_background(r, g, b):
            removed[x][y] = True
            queue.append((x, y))

    for x in range(w):
        try_add(x, 0)
        try_add(x, h - 1)
    for y in range(h):
        try_add(0, y)
        try_add(w - 1, y)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not removed[nx][ny]:
                r, g, b, _ = pixels[nx, ny]
                if is_background(r, g, b):
                    removed[nx][ny] = True
                    queue.append((nx, ny))

    for x in range(w):
        for y in range(h):
            r, g, b, a = pixels[x, y]
            if removed[x][y]:
                pixels[x, y] = (r, g, b, 0)
                continue

            lum = luminance(r, g, b)
            sat = saturation(r, g, b)
            peak = max(r, g, b)

            if lum < 48 and sat < 0.22:
                alpha = int((lum / 48) * 160)
                pixels[x, y] = (r, g, b, alpha)
            elif peak < 65 and b > r + 6:
                pixels[x, y] = (r, g, b, min(255, a or 255))
            else:
                pixels[x, y] = (r, g, b, 255)

    return img


def trim_transparent(img: Image.Image, padding: int = 2) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        return img
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(img.width, right + padding)
    bottom = min(img.height, bottom + padding)
    return img.crop((left, top, right, bottom))


img = Image.open(SRC)
img = flood_remove_background(img)
img = trim_transparent(img, padding=4)
img.save(OUT, optimize=True)
print(f"Saved {OUT} ({img.size[0]}x{img.size[1]})")
