function converterAnosLuz() {
    var valorKM = parseFloat(document.getElementById("valorKm").value);
    var valorAnosLuz = valorKM * 0.0000000000001057;
    document.getElementById("valorConvertidoAnosLuz").innerHTML = "A distância em Anos-Luz é de: " + valorAnosLuz;
}

function converterKm() {
    var valorAnosLuz = parseFloat(document.getElementById("valorAnosLuz").value);
    var valorKM = valorAnosLuz / 0.0000000000001057;
    document.getElementById("valorConvertidoKm").innerHTML = "A distância em KM é de: " + valorKM;
}