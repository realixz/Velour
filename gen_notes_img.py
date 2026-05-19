import base64, os, subprocess, sys

NOTES_DIR = os.path.expanduser("~/Desktop/fragrance-notes")
OUT_HTML  = os.path.expanduser("~/Desktop/velour/notes_preview.html")
OUT_IMG   = os.path.expanduser("~/Desktop/velour/liftmeup-notes.jpg")
CHROME    = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

def b64img(filename):
    path = os.path.join(NOTES_DIR, filename)
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode()
    ext = filename.rsplit(".", 1)[-1].lower()
    mime = "image/jpeg" if ext in ("jpg","jpeg") else "image/png"
    return f"data:{mime};base64,{data}"

sections = [
    ("TOP NOTES",    [("Magnolia",   "03-magnolia.jpg"),  ("Bergamot",   "bergamot.jpg")]),
    ("MIDDLE NOTES", [("Tonka",      "tonka-bean.jpg"),   ("Ylang Ylang","ylang-ylang.jpg")]),
    ("BASE NOTES",   [("Vanilla",    "vanilla.jpg"),      ("Musk",       "06-musk.jpg")]),
]

def section_html(title, notes):
    cards = ""
    for name, img in notes:
        cards += f"""
        <div class="note">
          <img src="{b64img(img)}" alt="{name}">
          <span>{name}</span>
        </div>"""
    return f"""
    <div class="section">
      <div class="header">
        <div class="line"></div>
        <span class="title">{title}</span>
        <div class="line"></div>
      </div>
      <div class="notes-row">{cards}
      </div>
    </div>"""

body = "".join(section_html(t, n) for t, n in sections)

html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  html, body {{
    width: 800px;
    background: #EDE8DF;
    font-family: 'Jost', 'Gill Sans', sans-serif;
  }}
  body {{ padding: 64px 70px 80px; }}
  .section {{ margin-bottom: 52px; }}
  .header {{
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 32px;
  }}
  .line {{ flex: 1; height: 1px; background: #B8986A; opacity: 0.7; }}
  .title {{
    font-family: 'Jost', 'Gill Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #B8986A;
    white-space: nowrap;
  }}
  .notes-row {{
    display: flex;
    justify-content: center;
    gap: 52px;
  }}
  .note {{ text-align: center; }}
  .note img {{
    width: 190px;
    height: 190px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
    margin-bottom: 14px;
  }}
  .note span {{
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 19px;
    font-weight: 300;
    color: #2A2420;
    letter-spacing: 0.02em;
  }}
</style>
</head>
<body>{body}
</body>
</html>"""

with open(OUT_HTML, "w") as f:
    f.write(html)

print("HTML written. Screenshotting...")

subprocess.run([
    CHROME,
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    f"--screenshot={OUT_IMG}",
    "--window-size=800,1200",
    "--hide-scrollbars",
    f"file://{OUT_HTML}"
], check=True, capture_output=True)

print(f"Done: {OUT_IMG}")
