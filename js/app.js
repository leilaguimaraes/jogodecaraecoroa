element("botaoJogar").onclick = () => {
  
  let jogadorCara = element("jogadorCara").value;
  let jogadorCoroa = element ("jogadorCoroa").value;
  
  if (jogadorCoroa == "" || jogadorCara == ""){
    return alert ("Digite nomes!")
  }
  const valor = Math.random();
  let imagem = "";
  let nomeVencedor = "";

  if (valor > 0.5) {
    imagem = "coroa";
    nomeVencedor = element("jogadorCoroa").value;
  } else {
    imagem = "cara";
    nomeVencedor = element("jogadorCara").value;
  }

  const caminhoImagem = `assets/images/${imagem}.png`;
  element("imagemMoeda").src = caminhoImagem;
  alert(nomeVencedor)
};

function element (id){
  return document.getElementById(id)
}

const myElement = (id) => console.log(id);
myElement("teste")
// sitatic sugar