const sparkles = document.getElementById("sparkles");
const hearts = document.getElementById("hearts");

for (let i = 0; i < 70; i++) {
  const dot = document.createElement("i");
  dot.className = "sparkle";
  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.setProperty("--dur", (1.4 + Math.random() * 3.5) + "s");
  dot.style.animationDelay = (Math.random() * 4) + "s";
  sparkles.appendChild(dot);
}

function floatHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.setProperty("--size", (12 + Math.random() * 22) + "px");
  heart.style.setProperty("--dur", (7 + Math.random() * 7) + "s");
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}
setInterval(floatHeart, 650);

document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hidden");
  const content = document.getElementById("content");
  content.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".reveal").forEach((el, index) => {
    setTimeout(() => el.classList.add("visible"), 180 + index * 220);
  });
  for (let i = 0; i < 18; i++) setTimeout(floatHeart, i * 65);
});

document.getElementById("smileBtn").addEventListener("click", () => {
  document.getElementById("response").classList.remove("hidden");
  for (let i = 0; i < 28; i++) setTimeout(floatHeart, i * 45);
  document.getElementById("smileBtn").textContent = "That smile looks good on you! ♥";
});
