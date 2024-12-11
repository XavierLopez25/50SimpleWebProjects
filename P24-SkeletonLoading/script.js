const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const names = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = '<img src="assets/bg.jpg" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.";
  profile_img.innerHTML = '<img src="assets/pp.jpg" alt="" />';
  names.innerHTML = "Nathan López";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
