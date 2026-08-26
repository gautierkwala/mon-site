"""Compare les captures avant / apres, largeur par largeur."""
import glob, os
from PIL import Image, ImageChops

REF, APRES = "/tmp/kwala-qa/ref", "/tmp/kwala-qa/apres"
print(f"{'capture':22s} {'reference':>13s} {'apres':>13s}  {'pixels differents':>18s}")
print("-" * 74)
for chemin in sorted(glob.glob(f"{REF}/*.png")):
    nom = os.path.basename(chemin)
    autre = f"{APRES}/{nom}"
    if not os.path.exists(autre):
        print(f"{nom:22s}  MANQUANT APRES"); continue
    a, b = Image.open(chemin).convert("RGB"), Image.open(autre).convert("RGB")
    if a.size != b.size:
        print(f"{nom:22s} {str(a.size):>13s} {str(b.size):>13s}  TAILLE DIFFERENTE")
        continue
    diff = ImageChops.difference(a, b)
    n = sum(1 for px in diff.getdata() if px != (0, 0, 0))
    total = a.size[0] * a.size[1]
    marque = "IDENTIQUE" if n == 0 else f"{n} ({100*n/total:.2f} %)"
    print(f"{nom:22s} {str(a.size):>13s} {str(b.size):>13s}  {marque:>18s}")
