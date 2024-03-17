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



const obterGermanyInformacoes = () => {
  const imagemGermany = document.getElementById("germany") as HTMLImageElement
  const ifoGermany = document.getElementById("ifoGermany") as HTMLParagraphElement
  const nomeGermany = document.getElementById("nomeGermany") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/germany`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    imagemGermany.src = flags.png
    ifoGermany.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeGermany.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

obterGermanyInformacoes()
