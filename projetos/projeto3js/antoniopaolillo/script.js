var numeroBola = document.getElementsByClassName("bolaacolorir");
var numeroBolas = numeroBola.length;
var corAdivinhar = document.getElementsByClassName("rgb")[0];


//funcao para gerar as cores aleatorias pelo rgb
function gerarCores() {
    let colorindo = [];

    for (let i = 0; i < numeroBolas; i++) {
        colorindo[i] = document.getElementsByClassName("bolaacolorir")[i];
        let cor1 = Math.floor(Math.random() * 255);
        let cor2 = Math.floor(Math.random() * 255);
        let cor3 = Math.floor(Math.random() * 255);

        colorindo[i].style.backgroundColor = 'rgb(' + cor1 + ',' + cor2 + ',' + cor3 + ')';

    }
    //adicinando cor sorteada ao div
    let numCorSorteada = Math.floor(Math.random() * numeroBolas);
    let corSorteada = document.getElementsByClassName("bolaacolorir")[numCorSorteada];
    let styleCor = corSorteada.style.backgroundColor;

    corAdivinhar.innerHTML = styleCor;

}

gerarCores();
add_event_click_all_cores();


//verificando se a cor clicada é a correta
function add_event_click_all_cores() {
    let size = document.getElementsByClassName("bolaacolorir");
    for (let i = 0; i < size.length; i++) {
        add_event_onclick_cores(size[i]);
    }
}

function add_event_onclick_cores(element) {
    element.addEventListener('click', function () {
        verificiar_placar(element.style.backgroundColor);
    })
}

function verificiar_placar(cor_clicado) {
    let resposta = document.getElementsByClassName("resposta")[0];
    let corMomento = corAdivinhar.innerHTML;
    if (cor_clicado == corMomento) {
        resposta.innerHTML = "Acertou!"
    } else {
        resposta.innerHTML = "Errrrrrrrou!"
    }
    placar();
}



//funcao para reiniciar o jogo
function resetar() {
    let resposta = document.getElementsByClassName("resposta")[0];
    let corMomento = corAdivinhar.innerHTML;
    let placar = document.getElementsByClassName("placar")[0];

    corMomento.innerHTML = "";
    resposta.innerHTML = "";
    placar.innerHTML = "";

    gerarCores();
}

//gerar o numero de bolas coloridas
function tamanho() {
    let inputDeBolinhas = document.getElementsByClassName("inputtxt")[0];
    var nrDeBolinhas = inputDeBolinhas.value;
    let container = document.getElementsByClassName("containerbola")[0];

    //apagando todas
    for (let cont = 0; cont < numeroBolas; cont++) {
        let primeiroFilho = container.firstElementChild;
        container.removeChild(primeiroFilho);
    }
    //criando novas bolinhas
    for (let cont2 = 0; cont2 < nrDeBolinhas; cont2++) {
        let filhoNovo = document.createElement("div");
        filhoNovo.setAttribute("class", "bolaacolorir")
        container.appendChild(filhoNovo);
    }
    //atualizando numero parametro de bolas coloridas
    numeroBolas = nrDeBolinhas;

    //chamando as funções para serem executadas com o novo numero de bolas coloridas
    add_event_click_all_cores();
    gerarCores();
}

let placar2 = 0;
var array = [];

//
function placar() {
    let placarDiv = document.getElementsByClassName("placar")[0];
    let resposta = document.getElementsByClassName("resposta")[0];
    let respostaHtml = resposta.innerHTML;
    let valor1 = 3;
    let valor2 = -1;

    //conferindo se acertou ou errou
    if (respostaHtml == "Acertou!") {
        placar2 += valor1;
        gerarCores();
        //regra dos tres acertos consecutivos
        if ((array[array.length - 1] + array[array.length - 2]) > 5) {
            placar2 += 1;
        }
        array.push(valor1);
    } else {
        placar2 += valor2;
        //regra dos tres erros consecutivos
        if ((array[array.length - 1] + array[array.length - 2]) < -1) {
            placar2 -= 1;
        }
        array.push(valor2);
    }

    // impossibilitando placar de ficar negativo
    if (placar2 < 1) {
        placar2 = 0;
    }

    placarDiv.innerHTML = placar2 + " pontos";
}
