# CSS Clip-Path Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-clip-path-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable recreation of the 23-second screen recording. The page presents eight CSS `clip-path` animation examples with selectable tabs, a live preview, replay control, and a CSS snippet panel with copy support.

## Effects in the video
1. Circle reveal
2. Hexagon pulse
3. Star spin
4. Diamond breathe
5. Diagonal sweep
6. Curtain drop
7. Iris open
8. Venetian blinds

## Run locally
- Extract the ZIP.
- Open `index.html` in a modern browser, or use VS Code Live Server.
- Select an effect tab to preview it and view its CSS.
- Click **Replay** to restart the animation or **Copy CSS** to copy the current snippet.

No npm install, framework, or build process is required.

## Source extraction notes
The screen recording shows the page title, all eight effect names, and portions of the CSS editor. The following values/selectors are legible and retained where shown:
- `.element` uses `background-image`, `background-size: cover`, `background-position: center`, and a named animation.
- Hexagon pulse: `hexPulse 3s ease-in-out infinite`, with the visible six-point polygon coordinates retained.
- Star spin: `starSpin 4s linear infinite`; visible star polygon coordinates retained.
- Diamond breathe: `diamondBreathe 3s ease-in-out infinite`.
- Diagonal sweep: `diagSweep 2.5s ease-in-out infinite alternate` (the trailing text is partially clipped in the recording; reconstructed as an alternate reveal).
- Curtain drop: `curtainDrop 2.5s ease-in-out infinite alternate`.
- Iris open: `irisOpen 2.5s ease-in-out infinite alternate`.
- Venetian blinds: `blindsOpen 2s ease-in-out infinite alternate`.

The original complete stylesheet is not fully readable in the recording. Unreadable or partially obscured keyframe details have been recreated as functional CSS, not represented as byte-for-byte recovered source.

## Images
Preview images are loaded from Unsplash URLs, so an internet connection is needed for the photographs. The CSS effects and page layout still run offline; browser fallback background colors appear if images cannot load.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
