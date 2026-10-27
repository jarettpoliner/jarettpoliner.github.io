# jarettpoliner.github.io

Personal academic website of Jarett Poliner, served by GitHub Pages from `main` at
<https://jarettpoliner.github.io/>.

Static HTML and CSS, plus one small script for the figure lightbox. There is no build step, framework, or backend.

```
index.html                 the page
jarett-poliner-resume.pdf  public résumé, linked from the header
assets/css/site.css        all styles (light theme, responsive at 700px)
assets/js/site.js          figure lightbox using <dialog>; figures still display without it
assets/img/                figures (WebP), publication thumbnail, portrait, favicon, social-preview card
```

## Figures

| File | Source |
|---|---|
| `cma-piplane-runtime-*` | Xiao, Poliner & Sun, *Computer Methods in Applied Mechanics and Engineering* 446 (2025) 118310, doi:10.1016/j.cma.2025.118310, © Elsevier. Reproduced with citation under the publisher's author-reuse terms. |
| `thumb-cma.webp` | Crop of one panel of the same figure (panel letter removed) |
| `og-card.jpg` | Text-only social-preview card |

Processing is limited to cropping, resizing and flattening transparency onto white. No plotted data are altered. The
traffic-forecasting panel is an inline SVG schematic and is labelled as such on the page.

## Local preview

```
python3 -m http.server 8000 --bind 127.0.0.1   # then open http://127.0.0.1:8000/
```
