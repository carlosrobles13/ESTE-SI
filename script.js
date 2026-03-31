const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const f1 = document.getElementById("f1");
const phi1 = document.getElementById("phi1");
const f2 = document.getElementById("f2");
const phi2 = document.getElementById("phi2");

const f1n = document.getElementById("f1n");
const phi1n = document.getElementById("phi1n");
const f2n = document.getElementById("f2n");
const phi2n = document.getElementById("phi2n");

function resizeCanvas() {
  canvas.width = canvas.clientWidth;
  canvas.height = 380;
  draw();
}

function syncPair(range, number) {
  range.addEventListener("input", () => {
    number.value = range.value;
    draw();
  });

  number.addEventListener("input", () => {
    range.value = number.value;
    draw();
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#22c55e";

  for (let x = 0; x < w; x++) {
    const t = x / 50;

    const y1 = Math.sin(t * f1.value * 0.01 + phi1.value * Math.PI / 180);
    const y2 = Math.sin(t * f2.value * 0.01 + phi2.value * Math.PI / 180);

    const y = (y1 + y2) / 2;
    const drawY = h / 2 + y * 100;

    if (x === 0) {
      ctx.moveTo(x, drawY);
    } else {
      ctx.lineTo(x, drawY);
    }
  }

  ctx.stroke();
}

syncPair(f1, f1n);
syncPair(phi1, phi1n);
syncPair(f2, f2n);
syncPair(phi2, phi2n);

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
