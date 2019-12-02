
let n = 13598799;
var contador = 0;
var x;
function teste(){
for (x = 1; x <= n; x++) {
    if (n % x == 0) {
        contador++;
    }
}
if (contador == 2)
    console.log("Número primo");
else
    console.log("Não é primo");
}
teste();