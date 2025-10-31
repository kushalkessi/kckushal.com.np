const text = "My name is Kushal KC";
const typingElement = document.getElementById("typing");
let index = 0;
let forward = true;

function typeEffect() {
  if (forward) {
    typingElement.textContent += text.charAt(index);
    index++;
    if (index === text.length) forward = false;
  } else {
    typingElement.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) forward = true;
  }
  setTimeout(typeEffect, 150); // typing speed
}

typeEffect();
