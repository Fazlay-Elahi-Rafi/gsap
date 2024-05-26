// ============== START "set" & "to" ==============

// by using "set" ami boltaci Default opacity 0..then "to" te oita 1 kore deci
gsap.set(".box1", {
  opacity: 0,
  background: "green",
});

// "to" it start the animation Start to end
gsap.to(".box1", {
  x: 150, // x - translateX [move left to right]
  duration: 2, // it means 2s
  repeat: -1, // By "-1" it means loops true
  opacity: 1,
  yoyo: true,
  background: "yellow",
});

// ============== START "from" & "fromTo" ==============

// "from" it start the animation end to Start
gsap.fromTo(
  ".box2",
  {
    y: 100,
    opacity: 0,
    background: "green",
  },
  {
    y: -100,
    opacity: 1,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
    background: "yellow",
  }
);

// ============== START "stagger" ==============
let play = document.querySelector(".play");
let puse = document.querySelector(".puse");
let restart = document.querySelector(".restart");

let tween = gsap.fromTo(
  ".boxx",
  {
    opacity: 0,
    background: "green",
  },
  {
    y: 150,
    duration: 2,
    repeat: -1,
    opacity: 1,
    ease: "power1",
    yoyo: true,
    background: "yellow",
    borderRadius: 10,
    stagger: {
      // from: "center",
      // axis: "x",
      amount: 2, //animation Speed
      each: 0.5,
      from: 0, //means koto number box thake animation start hobe
    },
  }
);

play.addEventListener("click", () => tween.play());
puse.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => tween.restart());


// ============== START "Timeline" ==============
// timeline dye amra onk golo section k ak sate one after one animation korte pari.
let tml = gsap.timeline();
tml
  .to(".tml1", {
    duration: 2,
    scale: 0,
    opacity: 0,
    delay: 1,
  })
  .to(".tml2", {
    duration: 2,
    x: -200,
  })
  .to(".tml3", {
    duration: 2,
    x: -200,
    borderRadius: 0,
    rotate: 360,
  })
  .set(".tml1", {
    duration: 2,
    scale: 1,
    opacity: 1,
    x: 140,
  });

play.addEventListener("click", () => tml.play());
puse.addEventListener("click", () => tml.pause());
restart.addEventListener("click", () => tml.restart());
