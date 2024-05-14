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

//moop code

window.onscroll = function (e) {
  var vertical_position = 0;
  if (pageYOffset)//usual
    vertical_position = pageYOffset;
  else if (document.documentElement.clientHeight)//ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)//ie quirks
    vertical_position = document.body.scrollTop;

  var your_div = document.getElementById('some_div');
  your_div.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
}

const demoDiv = document.querySelector("#demo");
window.addEventListener('scroll', function() {
  if (pageYOffset*0.0001 > 1 || pageYOffset*0.0001 < 0.2) { return; }
  else { demo.setAttribute('style', 'transform: scale('+pageYOffset*0.0001+');'); }
});
