const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = 300;

const f1 = document.getElementById("f1");
const phi1 = document.getElementById("phi1");
const f2 = document.getElementById("f2");
const phi2 = document.getElementById("phi2");

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;

  ctx.beginPath();

  for (let x = 0; x < w; x++) {
    const t = x / 50;

    const y1 = Math.sin(t * f1.value * 0.01 + phi1.value * Math.PI / 180);
    const y2 = Math.sin(t * f2.value * 0.01 + phi2.value * Math.PI / 180);

    const y = (y1 + y2) / 2;

    const drawY = h / 2 + y * 80;

    if (x === 0) ctx.moveTo(x, drawY);
    else ctx.lineTo(x, drawY);
  }

  ctx.strokeStyle = "#22c55e";
  ctx.stroke();
}

[f1, phi1, f2, phi2].forEach(el => {
  el.addEventListener("input", draw);
});

draw();
