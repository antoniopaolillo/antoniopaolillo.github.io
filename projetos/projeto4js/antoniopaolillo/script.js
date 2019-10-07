var imgs = ["img0.png", "img1.png", "img2.png", "img3.png"];
var fonts = ["initial", "italic", "inherit", "normal", "oblique", "unset"]

var cartaMisteriosa = document.getElementsByClassName("cartamisteriosa")[0];

var simbolos = "0123456789ABCDEF";
var colorBackground = "#";
var colorBackground2 = "#";
var carta;


function gerarCartas() {

    var textoDigitado = document.getElementById("inputtxt");
    var textoDigitadoValue = textoDigitado.value;
    var textoDigitadoSplit = textoDigitadoValue.split(" ");

    var numCartas = document.getElementsByTagName('div');
    var numCartasLength = numCartas.length - 3;

    //apagando cartas anteriores
    for (let j = 0; j < numCartasLength; j++) {
        let primeiroFilho = cartaMisteriosa.firstElementChild;
        cartaMisteriosa.removeChild(primeiroFilho);
    }

    //gerando o numero de cartas
    for (let i = 0; i < textoDigitadoSplit.length; i++) {
        carta = document.createElement('div');
        carta.setAttribute("class", "cartas");
        cartaMisteriosa.appendChild(carta);

        //adicionando texto por indice às cartas
        var texto = textoDigitadoSplit[i];
        carta.innerHTML = texto;

        //chamando funções que vão modificar a div cartas
        corBackground(carta);
        geraCor(carta);
        tamanhoFonte(carta);
        buscandoImg(carta);
        styleFonte(carta);
    }
    //alterando a div mediante clique
    alteraFonte();

    //mostrando na tela o numero de palavras
    let numeroCartas = document.getElementsByClassName("cartas");
    let numeroCartasLength = numeroCartas.length;
    let divCartas = document.getElementsByClassName("numerodecartas")[0];
    divCartas.innerHTML = "Quantidade da cartas misteriosas: " + numeroCartasLength;


}

//gerando backgroundcolor
function corBackground(carta) {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado = simbolos[Math.floor(Math.random() * 16)];
        colorBackground = colorBackground + simboloSorteado;
    }
    carta.style.backgroundColor = colorBackground;
    colorBackground = "#";
}

//gerando cor da fonte
function geraCor(carta) {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado2 = simbolos[Math.floor(Math.random() * 16)];
        colorBackground2 = colorBackground2 + simboloSorteado2;
    }
    carta.style.color = colorBackground2;
    colorBackground2 = "#";
}

//gerando tamanho da fonte
function tamanhoFonte(carta) {
    var tamanhoFonte = Math.floor(Math.random() * (70 - 20) + 20);
    carta.style.fontSize = tamanhoFonte + 'px';
}

//buscando background img
function buscandoImg(carta) {
    let sorteioImagem = Math.floor(Math.random() * 4);
    carta.style.backgroundImage = "url('img" + [sorteioImagem] + ".png')"
}

//gerando style da fonte
function styleFonte(carta) {
    let sorteioStyle = Math.floor(Math.random() * 6);
    carta.style.fontStyle = fonts[sorteioStyle];
}

//alterando fontes mediante clique
function alteraFonte() {
    let numeroCartas = document.getElementsByClassName("cartas");
    let numeroCartasLength = numeroCartas.length;
    for (let u = 0; u < numeroCartasLength; u++) {
        numeroCartas[u].addEventListener('click', function () {
            corBackground(numeroCartas[u]);
            geraCor(numeroCartas[u]);
            tamanhoFonte(numeroCartas[u]);
            buscandoImg(numeroCartas[u]);
            styleFonte(numeroCartas[u]);
        })
    }
}