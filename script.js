const effects = {
  circle: {
    title: "Circle reveal",
    className: "effect-circle",
    css: `.element {\n  background-image: url('landscape.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: circleReveal 3s ease-in-out infinite;\n}\n\n@keyframes circleReveal {\n  0%, 100% { clip-path: circle(8% at 50% 50%); }\n  50% { clip-path: circle(72% at 50% 50%); }\n}`
  },
  hexagon: {
    title: "Hexagon pulse",
    className: "effect-hexagon",
    css: `.element {\n  background-image: url('forest.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: hexPulse 3s ease-in-out infinite;\n}\n\n@keyframes hexPulse {\n  0%, 100% {\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%,\n      50% 100%, 0% 75%, 0% 25%);\n  }\n  50% {\n    clip-path: polygon(50% 10%, 92% 30%, 92% 70%,\n      50% 90%, 8% 70%, 8% 30%);\n  }\n}`
  },
  star: {
    title: "Star spin",
    className: "effect-star",
    css: `.element {\n  background-image: url('flowers.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: starSpin 4s linear infinite;\n}\n\n@keyframes starSpin {\n  0%, 100% {\n    clip-path: polygon(50% 0%, 61% 35%, 98% 35%,\n      68% 57%, 79% 91%, 50% 70%, 21% 91%,\n      32% 57%, 2% 35%, 39% 35%);\n  }\n  50% {\n    clip-path: polygon(50% 5%, 63% 38%, 98% 38%,\n      70% 59%, 80% 92%, 50% 73%, 20% 92%,\n      30% 59%, 2% 38%, 37% 38%);\n  }\n}`
  },
  diamond: {
    title: "Diamond breathe",
    className: "effect-diamond",
    css: `.element {\n  background-image: url('city.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: diamondBreathe 3s ease-in-out infinite;\n}\n\n@keyframes diamondBreathe {\n  0%, 100% { clip-path: polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%); }\n  50% { clip-path: polygon(50% 18%, 82% 50%, 50% 82%, 18% 50%); }\n}`
  },
  diagonal: {
    title: "Diagonal sweep",
    className: "effect-diagonal",
    css: `.element {\n  background-image: url('sunset.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: diagSweep 2.5s ease-in-out infinite alternate;\n}\n\n@keyframes diagSweep {\n  0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }\n  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }\n}`
  },
  curtain: {
    title: "Curtain drop",
    className: "effect-curtain",
    css: `.element {\n  background-image: url('aurora.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: curtainDrop 2.5s ease-in-out infinite alternate;\n}\n\n@keyframes curtainDrop {\n  0% { clip-path: inset(0 0 100% 0); }\n  100% { clip-path: inset(0 0 0 0); }\n}`
  },
  iris: {
    title: "Iris open",
    className: "effect-iris",
    css: `.element {\n  background-image: url('galaxy.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: irisOpen 2.5s ease-in-out infinite alternate;\n}\n\n@keyframes irisOpen {\n  0% { clip-path: ellipse(8% 8% at 50% 50%); }\n  100% { clip-path: ellipse(75% 65% at 50% 50%); }\n}`
  },
  blinds: {
    title: "Venetian blinds",
    className: "effect-blinds",
    css: `.element {\n  background-image: url('desert.jpg');\n  background-size: cover;\n  background-position: center;\n  animation: blindsOpen 2s ease-in-out infinite alternate;\n}\n\n@keyframes blindsOpen {\n  from {\n    clip-path: polygon(\n      0 0,100% 0,100% 0,0 0,\n      0 20%,100% 20%,100% 20%,0 20%,\n      0 40%,100% 40%,100% 40%,0 40%,\n      0 60%,100% 60%,100% 60%,0 60%,\n      0 80%,100% 80%,100% 80%,0 80%,\n      0 100%,100% 100%,100% 100%,0 100%\n    );\n  }\n  to { clip-path: polygon(0 0,100% 0,100% 100%,0 100%); }\n}`
  }
};

const tabs = document.querySelectorAll(".tab");
const visualFrame = document.getElementById("visualFrame");
const effectTitle = document.getElementById("effectTitle");
const codeOutput = document.getElementById("codeOutput");
const replayButton = document.getElementById("replayButton");
const copyButton = document.getElementById("copyButton");
let currentEffect = "circle";

function selectEffect(name) {
  const effect = effects[name];
  if (!effect) return;
  currentEffect = name;
  tabs.forEach(tab => {
    const active = tab.dataset.effect === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  effectTitle.textContent = effect.title;
  visualFrame.className = `visual-frame ${effect.className}`;
  codeOutput.textContent = effect.css;
}

tabs.forEach(tab => tab.addEventListener("click", () => selectEffect(tab.dataset.effect)));

replayButton.addEventListener("click", () => {
  visualFrame.style.animation = "none";
  void visualFrame.offsetWidth;
  visualFrame.style.animation = "";
  selectEffect(currentEffect);
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(effects[currentEffect].css);
    copyButton.textContent = "Copied!";
  } catch {
    copyButton.textContent = "Select CSS above";
  }
  window.setTimeout(() => { copyButton.textContent = "Copy CSS"; }, 1500);
});

selectEffect("circle");
