
function checkBoxDarkMode() {
  const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
  darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
      setDarkMode();
    } else {
      setWhiteMode()
    }
  });
}
checkBoxDarkMode();


const setDarkMode = () => {
  document.body.classList.add("dark-mode")
  localStorage.setItem("minhaClasse","dark-mode")
  document.body.classList.remove("white-mode")
}

const setWhiteMode = () => {
  document.body.classList.add("white-mode")
  localStorage.setItem("minhaClasse", "white-mode")
  document.body.classList.remove("dark-mode")
}

const valoresSalvosDarkMode = () => {
  const recupararValorMode = localStorage.getItem("minhaClasse")
  if (recupararValorMode === "dark-mode") {
    document.body.classList.add("dark-mode")
    document.body.classList.remove("white-mode")
  }else{
    document.body.classList.add("white-mode")
    document.body.classList.remove("dark-mode")
  }
}

valoresSalvosDarkMode()