var imgs = ["img0.png", "img1.png", "img2.png", "img3.png"];
var fonts = ["initial", "italic", "inherit", "normal", "oblique", "unset"]

var cartaMisteriosa = document.getElementsByClassName("cartamisteriosa")[0];

var simbolos = "0123456789ABCDEF";
var colorBackground = "#";
var colorBackground2 = "#";
var carta, numeroCartas, numeroCartasLength;


function geradorDeCartas() {
    var textoDigitado = document.getElementById("inputtxt");
    var textoDigitadoValue = textoDigitado.value;
    var textoDigitadoSplit = textoDigitadoValue.split(" ");

    numeroCartas = document.getElementsByTagName('div');
    numeroCartasLength = numCartas.length - 3;

    apagarCartasAnteriores(numCartasLength);

    //gerando o numero de cartas
    for (let i = 0; i < textoDigitadoSplit.length; i++) {
        carta = document.createElement('div');
        carta.setAttribute("class", "cartas");
        cartaMisteriosa.appendChild(carta);

        //adicionando texto por indice às cartas
        var texto = textoDigitadoSplit[i];
        carta.innerHTML = texto;

        //chamando funções que vão modificar a div cartas
        gerandoBackgroundColor(carta);
        geradorDeCor(carta);
        tamanhoDaFonte(carta);
        adicionandoBackgroundImage(carta);
        styleFonte(carta);
    }
    mostrandoNumeroDeCartas(textoDigitadoSplit);
    gerandoNovoEstilo();
}

function apagarCartasAnteriores(numCartasLength) {
    for (let j = 0; j < numCartasLength; j++) {
        let primeiroFilho = cartaMisteriosa.firstElementChild;
        cartaMisteriosa.removeChild(primeiroFilho);
    }
}

function mostrandoNumeroDeCartas(textoDigitadoSplit) {
    numeroCartas = document.getElementsByClassName("cartas");
    numeroCartasLength = numeroCartas.length;
    let contador = numeroCartasLength;

    //verificando se é apenas espaço em branco
    for (let i = 0; i < contador; i++) {
        let testandoTexto = textoDigitadoSplit[i];
        if (testandoTexto == "") {
            numeroCartasLength--;
        }
    }
    let divCartas = document.getElementsByClassName("numerodecartas")[0];
    divCartas.innerHTML = "Quantidade da cartas misteriosas: " + numeroCartasLength;
}

function gerandoBackgroundColor(carta) {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado = simbolos[Math.floor(Math.random() * 16)];
        colorBackground = colorBackground + simboloSorteado;
    }
    carta.style.backgroundColor = colorBackground;
    colorBackground = "#";
}

function geradorDeCor(carta) {
    for (let n = 0; n < 6; n++) {
        let simboloSorteado2 = simbolos[Math.floor(Math.random() * 16)];
        colorBackground2 = colorBackground2 + simboloSorteado2;
    }
    carta.style.color = colorBackground2;
    colorBackground2 = "#";
}

function tamanhoDaFonte(carta) {
    var tamanhoDaFonte = Math.floor(Math.random() * (70 - 20) + 20);
    carta.style.fontSize = tamanhoDaFonte + 'px';
}

function adicionandoBackgroundImage(carta) {
    let imagemSorteada = Math.floor(Math.random() * 4);
    carta.style.backgroundImage = "url('img" + [imagemSorteada] + ".png')"
}

function styleFonte(carta) {
    let sorteioStyle = Math.floor(Math.random() * 6);
    carta.style.fontStyle = fonts[sorteioStyle];
}

function gerandoNovoEstilo() {
    numeroCartas = document.getElementsByClassName("cartas");
    numeroCartasLength = numeroCartas.length;
    for (let u = 0; u < numeroCartasLength; u++) {
        numeroCartas[u].addEventListener('click', function () {
            gerandoBackgroundColor(numeroCartas[u]);
            geradorDeCor(numeroCartas[u]);
            tamanhoDaFonte(numeroCartas[u]);
            adicionandoBackgroundImage(numeroCartas[u]);
            styleFonte(numeroCartas[u]);
        })
    }
}