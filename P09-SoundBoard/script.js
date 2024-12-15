const sounds = [
  "xp",
  "bluetooth",
  "super idol 的笑容都没你的甜",
  "f1",
  "no19mouseinbakedbeans",
  "MAMAGUEVO",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    const song = document.getElementById(sound);
    song.volume = 0.5;
    song.play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
