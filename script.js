// script.js

// floating glow effect on mouse move

document.addEventListener("mousemove", (e) => {

  const hero = document.querySelector(".hero");

  const x = e.clientX;
  const y = e.clientY;

  hero.style.background = `
    radial-gradient(
      circle at ${x}px ${y}px,
      rgba(0,255,170,0.08),
      transparent 35%
    )
  `;
});

// card hover animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });

});