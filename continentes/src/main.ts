const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
function checkBoxDarkMode() {
  darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
      setDarkMode();
    } else {
      setWhiteMode();
    }
  });
}
const setDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("minhaClasse","dark-mode");
  document.body.classList.remove("white-mode");
}
const setWhiteMode = () => {
  document.body.classList.add("white-mode");
  localStorage.setItem("minhaClasse", "white-mode");
  document.body.classList.remove("dark-mode");
}
const valoresSalvosDarkMode = () => {
  const recupararValorMode = localStorage.getItem("minhaClasse");
  if (recupararValorMode === "dark-mode") {
    setDarkMode();
    salvarCheckBoxMarcado();
  }else{
    setWhiteMode();
    naoSalvarDarkMode();
  }
}
const salvarCheckBoxMarcado = () => {
  darkModeButton.checked = true;
};

const naoSalvarDarkMode = () => {
  darkModeButton.checked = false;
};

checkBoxDarkMode();
valoresSalvosDarkMode();

