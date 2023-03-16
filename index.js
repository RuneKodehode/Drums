document.addEventListener("keydown", (event) => {
  playSound(event.key.toUpperCase());
});

document.addEventListener("touchstart", (event) => {
  const key = event.target.getAttribute("accesskey");
  playSound(key);
});

function playSound(key) {
  const kbd = document.querySelector(`kbd[accesskey="${key}"]`);
  if (kbd) {
    const soundFile = kbd.dataset.sound;
    const audioElement = new Audio(soundFile);
    audioElement.play();
    kbd.classList.add("animate");

    setTimeout(() => {
      kbd.classList.remove("animate");
    }, 90);
  }
}
