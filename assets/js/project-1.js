var logo = document.querySelector(".logo");
var close = document.querySelector(".close");

let tml = gsap.timeline();

tml.to(".full", {
  right: 0,
  duration: 0.5,
});

tml.from(".full h4", {
  x: 100,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});

tml.from(".full i", {
  opacity: 0,
});

tml.pause();

logo.addEventListener("click", () => {
  tml.play();
});

close.addEventListener("click", () => {
  tml.reverse();
});
