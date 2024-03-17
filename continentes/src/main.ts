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
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

obterInformacoesBrazil()


const obterInformacoesIcenland = () => {
  const bandeiraiceland = document.getElementById("bandeiraiceland") as HTMLImageElement
  const infoice = document.getElementById("infoice") as HTMLParagraphElement
  const nomeIce = document.getElementById("nomeIce") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/iceland`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeiraiceland.src = flags.png
    infoice.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeIce.innerHTML = `${nomePais}`
   
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}
obterInformacoesIcenland();


const obterInformacoesAfeganistao = () => {
  const bandeiraafe = document.getElementById("bandeiraafe") as HTMLImageElement
  const infoafe = document.getElementById("infoafe") as HTMLParagraphElement
  const nomeafe = document.getElementById("nomeafe") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/Afghanistan`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeiraafe.src = flags.png
    console.log(data);
    infoafe.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeafe.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

obterInformacoesAfeganistao();



const informacoesAland = () => {
  const bandeirais = document.getElementById("bandeirais") as HTMLImageElement
  const infoinslaindia = document.getElementById("infoinslaindia") as HTMLParagraphElement
  const nomeirais = document.getElementById("nomeirais") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/Åland Islands`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeirais.src = flags.png
    console.log(data);
    infoinslaindia.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeirais.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}
informacoesAland()

const informacoesAlbania = () => {
  const bandeirAalbania = document.getElementById("bandeiraalbania") as HTMLImageElement
  const infoAlgabania = document.getElementById("infoAlgabania") as HTMLParagraphElement
  const nomeAlbania = document.getElementById("nomeAlbania") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/albania`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeirAalbania.src = flags.png
    console.log(data);
    infoAlgabania.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeAlbania.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

informacoesAlbania()