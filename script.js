// Typewriter
const text = "This year you didn’t travel… so I tried to bring the world to you.";
let index = 0;

function typeWriter() {
  const el = document.getElementById("type-text");
  if (!el) return;

  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;


// Final message
function revealMessage() {
  document.getElementById("final-message").innerText =
    "My bubu.\n\nHappy Birthday ❤️";
}
