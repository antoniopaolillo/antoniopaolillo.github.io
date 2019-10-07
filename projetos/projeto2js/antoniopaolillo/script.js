//gerando cores aleatorias
function geradordecores() {
    for (let i = 0; i < 4; i++) {
        var cor1 = [];
        cor1[i] = document.getElementsByClassName("coresfixas")[i];
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for (let n = 0; n < 6; n++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        cor1[i].style.backgroundColor = color;
        color = "#";
    }
}

//armazenando a cor ao clique, colocando numa variavel e alterando a cor do mostrador
var corfinal = "black";
var primeiracor = document.getElementsByClassName("coresfixas")[0];
var segundacor = document.getElementsByClassName("coresfixas")[1];
var terceiracor = document.getElementsByClassName("coresfixas")[2];
var quartacor = document.getElementsByClassName("coresfixas")[3];
var quintacor = document.getElementsByClassName("coresfixas")[4];
var corselecionada = document.getElementsByClassName("corselecionada")[0];

primeiracor.addEventListener('click', function () {
    corfinal = primeiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
segundacor.addEventListener('click', function () {
    corfinal = segundacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
terceiracor.addEventListener('click', function () {
    corfinal = terceiracor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quartacor.addEventListener('click', function () {
    corfinal = quartacor.style.backgroundColor;
    corselecionada.style.backgroundColor = corfinal;
})
quintacor.addEventListener('click', function () {
    corfinal = "black";
    corselecionada.style.backgroundColor = corfinal;
})

//adicionando a cor ao elemento clicado
var elementodatabela = document.getElementsByTagName('td');
for (i = 0; i < elementodatabela.length; i++) {
    elementodatabela[i].addEventListener('click', function () {
        this.style.background = corfinal;
    })
}

//função criada para ser chamada novamente após mudar a tabela
function adicionarcor() {
    let elementodatabela2 = document.getElementsByTagName('td');
    for (i = 0; i < elementodatabela2.length; i++) {
        elementodatabela2[i].addEventListener('click', function () {
            this.style.background = corfinal;
        })
    }
}

//limpando a tela
function limpartela() {
    let elementodatabela3 = document.getElementsByTagName('td');
    for (i = 0; i < elementodatabela3.length; i++) {
        elementodatabela3[i].style.background = "white";
    }
}

//mudando o tamanho do quadrado 
function tamanhoquadrado() {
    let contador = document.getElementById("tamanhoquadrado").value;
    if (contador > 5 && contador < 51) {
        var tamanhodatabela = document.getElementsByTagName("tr");
        var segundocontador = tamanhodatabela.length - 1;
        var tabelaapagar = document.getElementsByTagName('tbody')[1];
        //agapando a table
        for (let i = 0; i < segundocontador; i++) {
            let apagar = tabelaapagar.firstElementChild;
            tabelaapagar.removeChild(apagar);
        }
        function criar() {
            //gerando nova table
            for (let cont = 0; cont < contador; cont++) {
                var linhas = document.createElement('tr');
                linhas.setAttribute("class", "elemento");
                tabelaapagar.appendChild(linhas);

                for (let cont1 = 0; cont1 < contador; cont1++) {
                    var elementos = document.createElement('td');
                    elementos.setAttribute("class", "elemento");
                    linhas.appendChild(elementos);
                }
            }
            //chamando a função que muda as cores de acordo com o clique
            adicionarcor();
        }
    } else {
        alert("O valor passado não está de acordo com o padrão!");
    }
    criar();
}

//gerando table padrão github
function github() {
    limpartela()
    let tabelaGit = [];
    let tabelaGitTds = [];

    let elementostr = document.getElementsByTagName('tr');
    let elementostr2 = elementostr.length - 1;

    let contador4 = elementostr2;

    if (elementostr2 % 2 == 0) {
        contador4 = elementostr2;
    } else {
        contador4 = elementostr2 + 1;
    }

    for (let n = 1; n < elementostr2 + 1; n++) {
        tabelaGit[n] = document.getElementsByTagName('tr')[n];

        if (elementostr2 > 5) {
            for (let j = 0; j < contador4 / 2; j++) {

                let posicao = elementostr2 - j - 1;

                tabelaGitTds[j] = tabelaGit[n].childNodes[j];
                tabelaGitTds[posicao] = tabelaGit[n].childNodes[posicao];
                tabelaGitTds[j].value = Math.floor(Math.random() * 2);

                if (tabelaGitTds[j].value == 1) {
                    tabelaGitTds[j].style.backgroundColor = corfinal;
                    tabelaGitTds[posicao].style.backgroundColor = corfinal;
                } else {
                    tabelaGitTds[j].style.backgroundColor = "white";
                    tabelaGitTds[posicao].style.backgroundColor = "white";
                }
            }
            //else necessario pois a table gerada no html inicial apresenta 'texts' entre as posições
        } else {
            for (let i = 1; i < contador4; i = i + 2) {

                posicao = elementostr2 * 2 - i;
                tabelaGitTds[i] = tabelaGit[n].childNodes[i];
                tabelaGitTds[posicao] = tabelaGit[n].childNodes[posicao];
                tabelaGitTds[i].value = Math.floor(Math.random() * 2);

                if (tabelaGitTds[i].value == 1) {
                    tabelaGitTds[i].style.backgroundColor = corfinal;
                    tabelaGitTds[posicao].style.backgroundColor = corfinal;
                } else {
                    tabelaGitTds[i].style.backgroundColor = "white";
                    tabelaGitTds[posicao].style.backgroundColor = "white";
                }
            }
        }
    }
}



