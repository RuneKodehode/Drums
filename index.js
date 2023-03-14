addEventListener("keyup", (e) => new Audio(e.key).play());
addEventListener("keydown", animation);

function animation(e) {
  const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
  drum.classList.add("animation");
  setTimeout(function () {
    drum.classList.remove("animation");
  }, 80);
}
