function conferir() {
    //let v1 = $("#pecas").val();
    //let v2 = v1.toLowerCase();
    let v2 = "joao,maria,antonio,clareosvaldo,jose,lucas";
    let v3 = v2.split(",");
    let maior = 0;
    let resultado = 0;
    //alert(v3[1].length);
    for (let c = 0; c < v3.length; c++) {
        if (v3[c].length > maior) {

            maior = v3[c].length;
            resultado = v3[c];

            console.log("teste");
        }
    }
    console.log(resultado);
    console.log(maior);
}

conferir();