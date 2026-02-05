const options = document.querySelectorAll(".option");
const feedback = document.querySelector(".feedback");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((btn) => btn.classList.remove("selected"));
    option.classList.add("selected");
    feedback.innerHTML =
      "<strong>Nice work!</strong> The correct answer is A. 6x + 2.";
  });
});
