let actual = 1;
const total = 64;
const img = document.getElementById("slide");
const contador = document.getElementById("contador");

function mostrar(n) {
  if (n < 1) n = total;
  if (n > total) n = 1;
  actual = n;
  img.src = "img/slide-" + String(n).padStart(2, "0") + ".jpg";
  contador.textContent = actual + " / " + total;
  window.scrollTo(0, 0);
}
function siguiente() { mostrar(actual + 1); }
function anterior() { mostrar(actual - 1); }

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") siguiente();
  if (e.key === "ArrowLeft") anterior();
});

// deslizar en el cel
let inicioX = 0;
img.addEventListener("touchstart", e => inicioX = e.touches[0].clientX);
img.addEventListener("touchend", e => {
  let finX = e.changedTouches[0].clientX;
  if (finX < inicioX - 50) siguiente();
  if (finX > inicioX + 50) anterior();
});
