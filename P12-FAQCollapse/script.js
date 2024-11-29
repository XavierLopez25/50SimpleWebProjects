const toggleButtons = document.querySelectorAll(".faq-toggle");
console.log(toggleButtons);

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
