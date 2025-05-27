const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

function resizeAndDraw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Call on initial load
resizeAndDraw();

// Also call when window resizes
window.addEventListener("resize", resizeAndDraw);

const mouse = {
  x: null,
  y: null,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //   drawCircle();
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  //   drawCircle();
});

function drawCircle() {
  ctx.fillStyle = "white";
  // ctx.fillRect(10, 10, 150, 50);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  requestAnimationFrame(animate);
}
animate();
