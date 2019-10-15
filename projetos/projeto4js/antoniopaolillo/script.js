
const imgs = ["img0.png", "img1.png", "img2.png", "img3.png"];
const fonts = ["initial", "italic", "inherit", "normal", "oblique", "unset"];
const cartaMisteriosa = document.getElementsByClassName("card-deck")[0];

const simbolos = "0123456789ABCDEF";
const numeroDeSimbolosEmUmHexadecimal = 6;
var colorBackground = "#";
var colorBackground2 = "#";
var carta, numeroCartas, numeroCartasLength;

function cards_generator() {
    var textoDigitado = document.getElementById("card_text");
    var textoDigitadoValue = textoDigitado.value;
    var textoDigitadoSplit = textoDigitadoValue.split(" ");
    const divsAnteriores = 3;

    numeroCartas = document.getElementsByTagName('div');
    numeroCartasLength = numeroCartas.length - divsAnteriores;

    apagarCartasAnteriores(numeroCartasLength);

    //gerando o numero de cartas
    for (let index = 0; index < textoDigitadoSplit.length; index++) {
        carta = document.createElement('div');
        carta.setAttribute("class", "cartas");
        cartaMisteriosa.appendChild(carta);

        //adicionando texto por indice às cartas
        var texto = textoDigitadoSplit[index];
        carta.innerHTML = texto;

        //chamando funções que vão modificar a div cartas
        generateBackgroundColor(carta);
        generateColor(carta);
        generateFontSize(carta);
        addBackgroundImage(carta);
        generateFont(carta);
    }
    mostrandoNumeroDeCartas(textoDigitadoSplit);
    gerandoNovoEstilo();
}

function apagarCartasAnteriores(numCartasLength) {
    for (let index = 0; index < numCartasLength; index++) {
        let primeiroFilho = cartaMisteriosa.firstElementChild;
        cartaMisteriosa.removeChild(primeiroFilho);
    }
}

function mostrandoNumeroDeCartas(textoDigitadoSplit) {
    numeroCartas = document.getElementsByClassName("cartas");
    numeroCartasLength = numeroCartas.length;
    let contador = numeroCartasLength;

    //verificando se é apenas espaço em branco
    for (let index = 0; index < contador; index++) {
        let testandoTexto = textoDigitadoSplit[index];
        if (testandoTexto == "") {
            numeroCartasLength--;
        }
    }
    let divCartas = document.getElementsByClassName("number-of-cards")[0];
    divCartas.innerHTML = "Quantidade da cartas misteriosas: " + numeroCartasLength;
}

function generateBackgroundColor(carta) {
    for (let index = 0; index < numeroDeSimbolosEmUmHexadecimal; index++) {
        let simboloSorteado = simbolos[Math.floor(Math.random() * 16)];
        colorBackground = colorBackground + simboloSorteado;
    }
    carta.style.backgroundColor = colorBackground;
    colorBackground = "#";
}

function generateColor(carta) {
    for (let index = 0; index < numeroDeSimbolosEmUmHexadecimal; index++) {
        let simboloSorteado2 = simbolos[Math.floor(Math.random() * 16)];
        colorBackground2 = colorBackground2 + simboloSorteado2;
    }
    carta.style.color = colorBackground2;
    colorBackground2 = "#";
}

function generateFontSize(carta) {
    var tamanhoDaFonte = Math.floor(Math.random() * (70 - 20) + 20);
    carta.style.fontSize = tamanhoDaFonte + 'px';
}

function addBackgroundImage(carta) {
    let imagemSorteada = Math.floor(Math.random() * 4);
    carta.style.backgroundImage = "url('img" + [imagemSorteada] + ".png')";
}

function generateFont(carta) {
    let sorteioStyle = Math.floor(Math.random() * 6);
    carta.style.fontStyle = fonts[sorteioStyle];
}

function gerandoNovoEstilo() {
    numeroCartas = document.getElementsByClassName("cartas");
    numeroCartasLength = numeroCartas.length;
    for (let u = 0; u < numeroCartasLength; u++) {
        numeroCartas[u].addEventListener('click', function () {
            generateBackgroundColor(numeroCartas[u]);
            generateColor(numeroCartas[u]);
            generateFontSize(numeroCartas[u]);
            addBackgroundImage(numeroCartas[u]);
            generateFont(numeroCartas[u]);
        })
    }
}

// window.onload = cards_generator();