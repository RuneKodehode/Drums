const audioContext = new AudioContext();

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const kbd = document.querySelector(`kbd[accesskey="${key}"]`);
  if (kbd) {
    const soundFile = kbd.dataset.sound;
    const audioElement = new Audio(soundFile);
    audioElement.play();
    kbd.classList.add("animate");

    // Remove the "animate" class after the animation is complete
    setTimeout(() => {
      kbd.classList.remove("animate");
    }, 90);
  }
});
