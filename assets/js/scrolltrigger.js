let tml = gsap.timeline();

tml.from(".nav ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from("#page1 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  borderRadius: 0,
  repeat: -1,
  yoyo: true,
});

// "scrollTrigger" ami jokon page2 te visite korbo then animation start hobe
gsap.from("#page2 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  borderRadius: 0,
  repeat: 2,
  yoyo: true,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    scrub: true, //ar jono amr animation mouse scroll ar sate hocce
  },
  //   scrollTrigger: "#page2 .box",
});

// Text Scroll
gsap.from("#name h1", {
  transform: "translateX(-210%)",
  retpeat: -1,
  scrollTrigger: {
    trigger: "#name",
    scroller: "body",
    // start: "top 0%",
    // end: "top -150%",
    scrub: 2, //speed of scroll
    pin: true,
  },
});
