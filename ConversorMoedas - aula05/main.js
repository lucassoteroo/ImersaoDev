var elementoResultado = document.getElementById("resultado");

// [0] = reais
// [1] = dolares
// [2] = euros
// [3] = libras
// [4] = ienes
// [5] = bitcoins

var moedas = ["R$", "$", "€", "£", "¥", "btc"];

function calcular() {
    var moedaConverter = document.getElementById("converter").value;
    if (moedaConverter == "real") {
        converterReal();
    } else if (moedaConverter == "dolar") {
        converterDolar();
    } else if (moedaConverter == "euro") {
        converterEuro();
    } else if (moedaConverter == "libra") {
        converterLibra();
    } else if (moedaConverter == "iene") {
        converterIene();
    } else if (moedaConverter == "bitcoin") {
        converterBitcoin();
    } else {
        alert("Insira valores válidos");
    }
}

function converterReal() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "dolar") {
        moedaConvertida = valor * 0.19;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[0] + " = " + moedaConvertida + moedas[1];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        moedaConvertida = valor * 0.16;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[0] + " = " + moedaConvertida + moedas[2]
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        moedaConvertida = valor * 0.14;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[0] + " = " + moedaConvertida + moedas[3];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        moedaConvertida = valor * 20.77;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[0] + " = " + moedaConvertida + moedas[4];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        moedaConvertida = valor * 0.0000043;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[0] + " = " + moedaConvertida + moedas[5];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "real") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function converterDolar() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "real") {
        moedaConvertida = valor * 5.29;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[1] + " = " + moedaConvertida + moedas[0];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        moedaConvertida = valor * 0.86;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[1] + " = " + moedaConvertida + moedas[2];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        moedaConvertida = valor * 0.73;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[1] + " = " + moedaConvertida + moedas[3];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        moedaConvertida = valor * 109.88;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[1] + " = " + moedaConvertida + moedas[4];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        moedaConvertida = valor * 0.000023;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[1] + " = " + moedaConvertida + moedas[5];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "dolar") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function converterEuro() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "real") {
        moedaConvertida = valor * 6.18;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[2] + " = " + moedaConvertida + moedas[0];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "dolar") {
        moedaConvertida = valor * 1.17;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[2] + " = " + moedaConvertida + moedas[1];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        moedaConvertida = valor * 0.86;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[2] + " = " + moedaConvertida + moedas[3];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        moedaConvertida = valor * 128.47;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[2] + " = " + moedaConvertida + moedas[4];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        moedaConvertida = valor * 0.000027;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[2] + " = " + moedaConvertida + moedas[5];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function converterLibra() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "real") {
        moedaConvertida = valor * 7.28;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[3] + " = " + moedaConvertida + moedas[0];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "dolar") {
        moedaConvertida = valor * 1.36;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[3] + " = " + moedaConvertida + moedas[1];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        moedaConvertida = valor * 1.17;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[3] + " = " + moedaConvertida + moedas[2];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        moedaConvertida = valor * 149.72;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[3] + " = " + moedaConvertida + moedas[4];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        moedaConvertida = valor * 0.000031;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[3] + " = " + moedaConvertida + moedas[5];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function converterIene() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "real") {
        moedaConvertida = valor * 0.048;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[4] + " = " + moedaConvertida + moedas[0];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "dolar") {
        moedaConvertida = valor * 0.0091;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[4] + " = " + moedaConvertida + moedas[1];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        moedaConvertida = valor * 0.0078;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[4] + " = " + moedaConvertida + moedas[2];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        moedaConvertida = valor * 0.0067;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[4] + " = " + moedaConvertida + moedas[3];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        moedaConvertida = valor * 0.00000020;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[4] + " = " + moedaConvertida + moedas[5];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function converterBitcoin() {
    var moedaConvertida = document.getElementById("convertido").value;
    var valor = parseFloat(document.getElementById("valor").value);
    if (moedaConvertida == "real") {
        moedaConvertida = valor * 230880;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[5] + " = " + moedaConvertida + moedas[0];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "dolar") {
        moedaConvertida = valor * 43632.78;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[5] + " = " + moedaConvertida + moedas[1];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "euro") {
        moedaConvertida = valor * 37353.54;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[5] + " = " + moedaConvertida + moedas[2];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "libra") {
        moedaConvertida = valor * 32557.69;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[5] + " = " + moedaConvertida + moedas[3];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "iene") {
        moedaConvertida = valor * 4800470.40;
        moedaConvertida = moedaConvertida.toFixed(2);
        elementoResultado.innerHTML = valor + moedas[5] + " = " + moedaConvertida + moedas[4];
        document.getElementById("valor").value = "";
    } else if (moedaConvertida == "bitcoin") {
        elementoResultado.innerHTML = "Não se converte a mesma moeda";
        document.getElementById("valor").value = "";
    }
}

function refazer() {
    elementoResultado.innerHTML = "";
    document.getElementById("valor").value = "";
    document.getElementById("converter").value = "real";
    document.getElementById("convertido").value = "real";
}