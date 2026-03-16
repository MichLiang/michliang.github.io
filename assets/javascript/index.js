function updateMoon() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const t = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

  const vw = window.innerWidth / 100;
  const vh = window.innerHeight / 100;

  const centerX = 50 * vw;
  const centerY = 85 * vh;
  const radiusX = 40 * vw;
  const radiusY = 70 * vh;

  const angle = Math.PI * t;
  const x = centerX - radiusX * Math.cos(angle);
  const y = centerY - radiusY * Math.sin(angle);

  const rotation = t * 720;

  const moon = document.querySelector(".moon");
  if (moon) {
    moon.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg)";
  }
}

window.addEventListener("scroll", updateMoon);
updateMoon();
