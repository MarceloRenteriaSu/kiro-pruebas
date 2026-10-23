// Paletas de colores para el fondo
const palettes = [
  ["#6a11cb", "#2575fc"],
  ["#ff512f", "#dd2476"],
  ["#11998e", "#38ef7d"],
  ["#f12711", "#f5af19"],
  ["#8e2de2", "#4a00e0"],
  ["#1a2980", "#26d0ce"],
];

const emojis = ["👋", "🚀", "🌟", "🎉", "🔥", "🌈", "💫", "🦾"];

let count = 0;
let paletteIndex = 0;

const body = document.body;
const colorBtn = document.getElementById("colorBtn");
const countEl = document.getElementById("count");
const emojiEl = document.getElementById("emoji");
const yearEl = document.getElementById("year");

// Año actual en el footer
yearEl.textContent = new Date().getFullYear();

colorBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;

  // Cambia la paleta del fondo
  paletteIndex = (paletteIndex + 1) % palettes.length;
  const [c1, c2] = palettes[paletteIndex];
  body.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
  body.style.backgroundSize = "200% 200%";

  // Cambia el emoji aleatoriamente
  emojiEl.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Pequeño rebote del emoji
  emojiEl.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.4)" },
      { transform: "scale(1)" },
    ],
    { duration: 400, easing: "ease-out" }
  );
});
