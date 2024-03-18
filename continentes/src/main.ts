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


const botaoPesquisar = document.querySelector(".fa-solid") as HTMLElement
const pesquisarContinentes = () => {
  if (pesquisarPaises.value == "") {
    mensagemValorVazio();
  }else{
    fetch(`https://restcountries.com/v3.1/name/${pesquisarPaises.value}`)
    .then(response => response.json())
    .then(data => {
      ocultarSection();
      mostrarDiv()
      exibirResultados(data)
    })
    .catch(erro => {
      console.error(erro)
    })
  }
}

const mostrarDiv = () => {
  const esconder = document.querySelector(".esconder") as HTMLDivElement;
  esconder.style.display = "block"
};
const exibirResultados = (data: any) => {
  const nomePaisBuscado = document.getElementById("nomePaisBuscado") as HTMLParagraphElement
  const imagemPaisBuscado = document.getElementById("imagemPaisBuscado") as HTMLImageElement
  const resultadoPesquisaPais = document.getElementById("resultadoPesquisaPais") as HTMLParagraphElement
  const exibirResultadosDaPesquisa = document.querySelector(".exibirResultados") as HTMLDivElement
  const {flags, population, region, capital, name} = data[0]
  nomePaisBuscado.innerHTML = name.common
  imagemPaisBuscado.src = flags.png
  resultadoPesquisaPais.innerHTML = `Population: ${population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
  <br> Region: ${region} <br> Capital: ${capital}`
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

let selecionarRegiao: any = null
const criarImagem = (src: string): HTMLImageElement => {
  const imagem = document.createElement("img");
  imagem.classList.add("card-img-top");
  imagem.src = src;
  return imagem;
};

const criarCard = (): HTMLDivElement => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "13rem";
  console.log(card);
  return card;
};

const criarDiv = (): HTMLDivElement => {
  return document.createElement("div");
};

const criarParagrafo = (texto: string): HTMLParagraphElement => {
  const paragrafo = document.createElement("p");
  paragrafo.classList.add("card-text");
  paragrafo.innerHTML = texto;
  return paragrafo;
};

const formatarNumero = (numero: number): string => {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const adicionarElementoAoBody = (elemento: HTMLElement) => {
  document.body.appendChild(elemento);
};

const buscarPorcontinentes = () => {
  fetch(`https://restcountries.com/v3.1/region/${selecionarRegiao}`)
    .then(response => response.json())
    .then((data: any[]) => {
      data.forEach((element: any) => {
        const { flags, population, region, capital, name } = element;
        const imagem = criarImagem(flags.png);
        const card = criarCard();
        const div2 = criarDiv();
        card.appendChild(imagem);
        div2.classList.add("card-body");
        const nomePais = criarParagrafo(name.common);
        div2.appendChild(nomePais);
        const resultadoPesquisaPais = criarParagrafo(
          `Population: ${formatarNumero(population)}<br>Region: ${region}<br>Capital: ${capital}`
        );
        div2.appendChild(resultadoPesquisaPais);
        card.appendChild(div2);
        adicionarElementoAoBody(card);
      });
    })
    .catch(error => {
      console.error(error);
    });
};

const continentes = document.getElementById("continentes") as HTMLSelectElement
const options = continentes.options
continentes.addEventListener("change", () => {
  if (options[0].selected) {
    selecionarRegiao = "africa"
    buscarPorcontinentes()
    ocultarSection()
  }else if (options[1].selected) {
    selecionarRegiao = "americas"
    buscarPorcontinentes()
    ocultarSection()
  }else if (options[2].selected) {
    selecionarRegiao = "asia"
    buscarPorcontinentes()
    ocultarSection()
  }else if (options[3].selected) {
    selecionarRegiao = "europe"
    buscarPorcontinentes()
    ocultarSection()
  }else{
    selecionarRegiao = "oceania"
    buscarPorcontinentes()
    ocultarSection()
  }
});

buscarPorcontinentes();

const recarregar = document.getElementById("Recarregar") as HTMLButtonElement
const recarregarPagina = () => {
  location.reload();
}

recarregar.addEventListener("click", () => {
  recarregarPagina();
})