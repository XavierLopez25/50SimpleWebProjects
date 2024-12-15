const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
password.addEventListener("input", (e) => {
  const input = e.target.value;
  const strength = checkPasswordStrength.passwordStrength(input).value;
  console.log(strength);
  let blurValue;

  switch (strength) {
    case "Too weak":
      blurValue = 15;
      break;
    case "Weak":
      blurValue = 10;
      break;
    case "Medium":
      blurValue = 5;
      break;
    case "Strong":
      blurValue = 0;
      break;
    default:
      blurValue = 20;
  }

  background.style.filter = `blur(${blurValue}px)`;
});
