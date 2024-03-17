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


const obterInformacoesEua = () => {
  const bandeiraEua = document.getElementById("euabandeira") as HTMLImageElement
  const infoEua = document.getElementById("infoEua") as HTMLParagraphElement
  const nomeEua = document.getElementById("nomeEua") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/United States`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[2]
    const nomePais = name.common
    bandeiraEua.src = flags.png
    infoEua.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeEua.innerHTML = `${nomePais}`
     console.log(data);
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

obterInformacoesEua()

const obterInformacoesBrazil = () => {
  const bandeirabrasil = document.getElementById("bandeirabrasil") as HTMLImageElement
  const infobrasil = document.getElementById("infobrasil") as HTMLParagraphElement
  const nomeBrasil = document.getElementById("nomeBrasil") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/brazil`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeirabrasil.src = flags.png
    infobrasil.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeBrasil.innerHTML = `${nomePais}`
     console.log(data);
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

obterInformacoesBrazil()