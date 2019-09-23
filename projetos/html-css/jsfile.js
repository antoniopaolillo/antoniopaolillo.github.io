function teste() {
    //    var valor1 = document.getElementById("teste1");
    //    var valor2 = document.getElementById("teste2");
    // var valor3 = valor1 * valor2;
    var v1 = $("#teste1").val()
    var v2 = $("#teste2").val()
    var v3 = v1 * v2;
    alert(v3);

    $("#valorfinal").append("#v3");
    document.getElementById("valorfinal").innerHTML += v3;
}