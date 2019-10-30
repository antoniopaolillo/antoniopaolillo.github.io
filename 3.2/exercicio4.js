var n = 7;
var espaco, ast, estrela;
function teste(){
for (var i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
        espaco = (n - i) / 2; //por causa do i 0 na primeira linha 
        ast = i ; //i começa em 0, e tem 1 * na primeira linha
        estrela = ' '.repeat(espaco) + '*'.repeat(ast) + ' '.repeat(espaco); //'string'.repeat(numerodevezes)
        console.log(estrela);
    }
}  
}
teste();