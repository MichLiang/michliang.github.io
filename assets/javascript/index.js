const background = document.querySelector(".background");

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const maxDegreesToRotate = 720;
  const speed = maxDegreesToRotate / document.documentElement.scrollHeight;
  const rotation = scrollPosition * speed;
  const rotationStr = `rotate(${rotation}deg)`;
  $(".moon").css({
    transform: rotationStr,
  });
});
