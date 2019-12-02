var n = 6;
var espaco, ast, estrela;
function  teste() {
for (var i = 0; i < n; i++){
  espaco = n - 1 - i; //por causa do i 0 na primeira linha 
  ast = i + 1; //i começa em 0, e tem 1 * na primeira linha
  estrela = ' '.repeat(espaco) + '*'.repeat(ast); //'string'.repeat(numerodevezes)
  console.log(estrela);    
}  
}
teste();