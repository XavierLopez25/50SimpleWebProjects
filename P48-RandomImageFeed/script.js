const container = document.querySelector(".container");

const unsplashURL = "https://picsum.photos/500/500";

const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/500/500?random=${i}`;
  container.appendChild(img);
}
