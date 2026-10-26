# jarettpoliner.github.io

Personal academic website of Jarett Poliner, served by GitHub Pages from `main` at
<https://jarettpoliner.github.io/>.

Static HTML and CSS, plus one small script for the figure lightbox. There is no build step, framework, or backend.

```
index.html           the page
resume.pdf           résumé, linked from the header
assets/css/site.css  all styles (light theme, responsive at 700px)
assets/js/site.js    figure lightbox using <dialog>; figures still display without it
assets/img/          figures (WebP, 900px and 1600–1800px widths), thumbnails, portrait
```

## Figures

Every research figure is taken from a published paper and cited in its caption:

| File | Source |
|---|---|
| `pbx-pipeline-*` | Poliner et al., *Engineering with Computers* (2026), Fig. 1, doi:10.1007/s00366-026-02445-8. Labels re-typeset. |
| `pbx-real-vs-generated-*` | Same paper, Fig. 11 (a) and (b), placed side by side with headers |
| `pbx-pointcloud-mesh-voxel-*` | Same paper, Fig. 10. Labels re-typeset. |
| `cma-yield-enrichment-*` | Xiao, Poliner & Sun, *CMAME* 446 (2025) 118310, © Elsevier |
| `cma-piplane-runtime-*` | Same paper, convergence-time maps, © Elsevier |
| `thumb-*` | Crops of the figures above |

Processing is limited to cropping, resizing, flattening transparency onto white, and re-typesetting panel labels. No plotted data are altered. The traffic-forecasting panel is an inline SVG schematic and is labelled as such on the page.

## Local preview

```
python3 -m http.server 8000   # then open http://localhost:8000/
```
