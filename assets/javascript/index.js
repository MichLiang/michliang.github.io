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

// Raph easter egg toggle
(function () {
  var raphToggle = document.getElementById('raph-toggle');
  var raphDiv = document.querySelector('.raph');
  if (!raphToggle || !raphDiv) return;

  var state = 'hidden-left'; // hidden-left -> visible -> hidden-right -> hidden-left

  raphToggle.addEventListener('click', function (e) {
    e.preventDefault();
    if (state === 'hidden-left') {
      raphDiv.classList.add('visible');
      state = 'visible';
    } else if (state === 'visible') {
      raphDiv.classList.remove('visible');
      raphDiv.classList.add('dismissed');
      state = 'hidden-right';
    }
  });

  raphDiv.addEventListener('transitionend', function () {
    if (state === 'hidden-right') {
      raphDiv.style.transition = 'none';
      raphDiv.classList.remove('dismissed');
      raphDiv.offsetHeight; // force reflow so the reset applies instantly
      raphDiv.style.transition = '';
      state = 'hidden-left';
    }
  });
})();
