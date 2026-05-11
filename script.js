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
// ADD THIS IN script.js

// workflow pulse animation

const workflowSteps = document.querySelectorAll(".workflow-step.active");

workflowSteps.forEach((step, index) => {

  setInterval(() => {

    step.classList.add("pulse");

    setTimeout(() => {
      step.classList.remove("pulse");
    }, 800);

  }, 1800 + index * 400);

});
// Simple chat typing animation simulation
const chatBubbles = document.querySelectorAll('.chat-bubble');

function animateChat() {
    chatBubbles.forEach((bubble, index) => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            bubble.style.transition = 'all 0.5s ease';
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, 500 + (index * 1000));
    });
}

// Run once on load
animateChat();
// Repeat every 5 seconds
setInterval(animateChat, 5000);