var defaultPath = `M 10 100 Q 500 100 1200 100`;
var finalPath = `M 10 100 Q 500 100 1200 100`;

const wrp = document.querySelector("#wrapper");

wrp.addEventListener("mousemove", (value) => {
  defaultPath = `M 10 100 Q ${value.x} ${value.y} 1200 100`;

  gsap.to("svg path", {
    attr: { d: defaultPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

wrp.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});
