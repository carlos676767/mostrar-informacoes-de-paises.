
function checkBoxDarkMode() {
  const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
  darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
      document.body.classList.add("dark-mode")
      document.body.classList.remove("white-mode")
    } else {
      document.body.classList.add("white-mode")
      document.body.classList.remove("dark-mode")
    }
  });
}
checkBoxDarkMode();