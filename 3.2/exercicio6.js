let entrada = "MCIX";


var romano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let resultado3 = [];
let a = 0;
let resultado2 = 0;
var resultado = entrada.split("");
let resultadofinal = 0;
// for (var i = 0; i < resultado.length; i++){
//     resultado[i] = resultado3;
// }
function teste() {
for (count of resultado) {
    resultado3[a] = romano[count];
    a++;
}

for (let c = 0; c < resultado3.length; c++) {
    if (resultado3[c] < resultado3[c + 1]) {
        resultado3[c + 1] = resultado3[c + 1] - resultado3[c];
    } else {
        resultadofinal += resultado3[c];
    }

}

console.log(resultadofinal);
}

teste();