const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);
