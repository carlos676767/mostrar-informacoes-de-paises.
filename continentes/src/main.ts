import Swal from 'sweetalert2';

const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
const pesquisarPaises = document.getElementById("pesquisarPaises") as HTMLInputElement

function checkBoxDarkMode() {
  darkModeButton.addEventListener("change", () => {
    if (darkModeButton.checked) {
      setDarkMode();
      cardsBlack();
      textosBlack();
      inputBlack();
    } else {
      setWhiteMode();
      cardsWhite();
      textosWhite();
      inputWhite();
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
    cardsBlack();
    textosBlack();
    inputBlack();
  }else{
    setWhiteMode();
    naoSalvarDarkMode();
    cardsWhite();
    textosWhite();
    inputWhite();
  }
}
const salvarCheckBoxMarcado = () => {
  darkModeButton.checked = true;
};

const naoSalvarDarkMode = () => {
  darkModeButton.checked = false;
};

const cards = document.querySelectorAll(".card-body")
const cardsBlack = () => {
  cards.forEach(element => {
    element.classList.add("dark-mode");
    console.log(element);
    element.classList.remove("white-mode");
  });
}

const cardsWhite = () => {
  cards.forEach(element => {
    element.classList.add("white-mode");
    element.classList.remove("dark-mode");
  });
}



const textos = document.querySelectorAll("p")
const textosBlack = () => {
  textos.forEach(element => {
    element.classList.add("dark-mode");
    element.classList.remove("white-mode");
  });
}

const textosWhite = () => {
  textos.forEach(element => {
    element.classList.remove("dark-mode");
    element.classList.add("white-mode");
  });
}

const inputBlack = () => {
  pesquisarPaises.classList.add("dark-mode");
  pesquisarPaises.classList.remove("white-mode");
};

const inputWhite = () => {
  pesquisarPaises.classList.remove("dark-mode");
  pesquisarPaises.classList.add("white-mode");
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
    infoAlgabania.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeAlbania.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

informacoesAlbania();

const informacoesAlgeria = () => {
  const bandeiraAlgeria = document.getElementById("bandeiraAlgeria") as HTMLImageElement
  const infoAlgeria = document.getElementById("infoAlgeria") as HTMLParagraphElement
  const nomeAlgeria = document.getElementById("nomeAlgeria") as HTMLParagraphElement
  fetch(`https://restcountries.com/v3.1/name/ Algeria`)
  .then(response => response.json())
  .then(data => {
    const {flags, population, region, capital, name} = data[0]
    const nomePais = name.common
    bandeiraAlgeria.src = flags.png
    infoAlgeria.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
     <br> Region: ${region} <br> Capital: ${capital} `
     nomeAlgeria.innerHTML = `${nomePais}`
  })
  .catch(erro => {
    console.error('erro ao achar o pais', erro)
  })
}

informacoesAlgeria()

const botaoPesquisar = document.querySelector(".fa-solid") as HTMLElement
 
const pesquisarContinentes = () => {
  if (pesquisarPaises.value == "") {
    mensagemValorVazio();
  }else{
    fetch(`https://restcountries.com/v3.1/name/${pesquisarPaises.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const exibirResultados = document.querySelector(".exibirResultados") as HTMLDivElement
      const {flags, population, region, capital, name} = data[0]
      ocultarSection();
      exibirResultados.innerHTML = `<div class="card" style="width: 13rem;" class="resultadosPesquisa">
      <img class="card-img-top" src="${flags.png}" alt="Card image cap">
      <div class="card-body">
       <pclass="card-text">${name.common}</p>
        <p>Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        <br> Region: ${region} <br> Capital: ${capital}</p>
      </div>
    </div>`
    console.log(exibirResultados);
    
    })
    .catch(erro => {
      console.error(erro)
    })
  }
}

const ocultarSection = () => {
  const section = document.querySelector("section") as HTMLSelectElement
  section.style.display = "none";
}

const mensagemValorVazio = () => {
  Swal.fire({
    title: 'Erro!',
    text: 'O valor está vazio.',
    icon: 'error',
    confirmButtonText: 'OK'
  });
}


botaoPesquisar.addEventListener("click", () => {
 pesquisarContinentes();
})