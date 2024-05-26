let main = document.querySelector(".wrapper");
let cursor = document.querySelector(".cursor");
let img = document.querySelector(".img");

main.addEventListener("mousemove", (value) =>
  gsap.to(cursor, {
    x: value.x,
    y: value.y,
    duration: 0.6,
    ease: "back.out",
  })
);

img.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View more";

  gsap.to(cursor, {
    scale: 4,
    opacity: 0.7,
    background: "#88e44f",
  });
});

img.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
    background: "#ffffff",
  });
});
