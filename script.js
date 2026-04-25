// Scroll to journey
function scrollToJourney() {
  document.querySelector(".letter").scrollIntoView({
    behavior: "smooth"
  });
}

// Typewriter
const text = "This year you didn’t travel… so I brought the world to you.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("type-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;


// Fade-in on scroll
const sections = document.querySelectorAll(".letter");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});


// Final reveal
function revealMessage() {
  document.getElementById("final-message").innerText =
    "You didn’t travel this year… but somehow, you still made everything feel like a journey.\n\nHappy Birthday ❤️";
}
