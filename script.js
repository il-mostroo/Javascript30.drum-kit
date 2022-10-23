const KBDs = document.querySelectorAll("KBD");
const audios = document.querySelectorAll("audio");

document.addEventListener("keypress", (e) => {
  const keysArray = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const pressedKeyKbd = e.code.slice(3);
  if (keysArray.includes(pressedKeyKbd)) {
    for (let kbd of KBDs) {
      if (kbd.innerText === pressedKeyKbd) {
        kbd.parentElement.classList.add("playing");
        const dataKey = kbd.parentElement.dataset.key;
        playSound(dataKey);
      }
      setTimeout(() => {
        kbd.parentElement.classList.remove("playing");
      }, 70);
    }
  }
});

function playSound(dataKey) {
  audios.forEach((audio) => {
    if (audio.dataset.key === dataKey) {
      audio.play();
    }
  });
}
