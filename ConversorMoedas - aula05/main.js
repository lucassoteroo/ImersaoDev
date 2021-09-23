var elementoResultado = document.getElementById("resultado");
var reais = "R$";
var dolares = "$";
var euros = "€";
var libras = "£";
var ienes = "¥";
var bictoins = "btc";

function calcular() {
    var moedaConverter = document.getElementById("converter").value;
    var moedaConvertida = document.getElementById("convertido").value;
    if (moedaConverter == "real" && moedaConvertida == "dolar") {
        converterRealParaDolar();
    } else if (moedaConverter == "real" && moedaConvertida == "euro") {
        converterRealParaEuro();
    } else if (moedaConverter == "real" && moedaConvertida == "libra") {
        converterRealParaLibra();
    } else if (moedaConverter == "real" && moedaConvertida == "iene") {
        converterRealParaIene();
    } else if (moedaConverter == "real" && moedaConvertida == "bitcoin") {
        converterRealParaBitcoin();
    } else if (moedaConverter == "dolar" && moedaConvertida == "real") {
        converterDolarParaReal();
    } else if (moedaConverter == "dolar" && moedaConvertida == "euro") {
        converterDolarParaEuro();
    } else if (moedaConverter == "dolar" && moedaConvertida == "libra") {
        converterDolarParaLibra();
    } else if (moedaConverter == "dolar" && moedaConvertida == "iene") {
        converterDolarParaIene();
    } else if (moedaConverter == "dolar" && moedaConvertida == "bitcoin") {
        converterDolarParaBitcoin();
    } else if (moedaConverter == "euro" && moedaConvertida == "real") {
        converterEuroParaReal();
    } else if (moedaConverter == "euro" && moedaConvertida == "dolar") {
        converterEuroParaDolar();
    } else if (moedaConverter == "euro" && moedaConvertida == "libra") {
        converterEuroParaLibra()
    } else if (moedaConverter == "euro" && moedaConvertida == "iene") {
        converterEuroParaIene();
    } else if (moedaConverter == "euro" && moedaConvertida == "bitcoin") {
        converterEuroParaBitcoin();
    } else if (moedaConverter == "libra" && moedaConvertida == "real") {
        converterLibraParaReal();
    } else if (moedaConverter == "libra" && moedaConvertida == "dolar") {
        converterLibraParaDolar();
    } else if (moedaConverter == "libra" && moedaConvertida == "euro") {
        converterLibraParaEuro();
    } else if (moedaConverter == "libra" && moedaConvertida == "iene") {
        converterLibraParaIene();
    } else if (moedaConverter == "libra" && moedaConvertida == "bitcoin") {
        converterEuroParaBitcoin();
    } else if (moedaConverter == "iene" && moedaConvertida == "real") {
        converterIeneParaReal();
    } else if (moedaConverter == "iene" && moedaConvertida == "dolar") {
        converterIeneParaDolar();
    } else if (moedaConverter == "iene" && moedaConvertida == "euro") {
        converterIeneParaEuro();
    } else if (moedaConverter == "iene" && moedaConvertida == "libra") {
        converterIeneParaLibra();
    } else if (moedaConverter == "iene" && moedaConvertida == "bitcoin") {
        converterIeneParaBitcoin();
    } else if (moedaConverter == "bitcoin" && moedaConvertida == "real") {
        converterBitcoinParaReal();
    } else if (moedaConverter == "bitcoin" && moedaConvertida == "dolar") {
        converterBitcoinParaDolar();
    } else if (moedaConverter == "bitcoin" && moedaConvertida == "euro") {
        converterBitcoinParaEuro();
    } else if (moedaConverter == "bitcoin" && moedaConvertida == "libra") {
        converterBitcoinParaLibra();
    } else if (moedaConverter == "bitcoin" && moedaConvertida == "iene") {
        converterBitcoinParaIene();
    } else {
        alert("Insira valores válidos");
    }
}

function converterRealParaDolar() {
    // real para dolar
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.19;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + reais + " = " + moedaConvertida + dolares;
    document.getElementById("valor").value = "";
}

function converterRealParaEuro() {
    // real para euro
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.16;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + reais + " = " + moedaConvertida + euros
    document.getElementById("valor").value = "";
}

function converterRealParaLibra() {
    // real para libra
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.14;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + reais + " = " + moedaConvertida + libras;
    document.getElementById("valor").value = "";
}

function converterRealParaIene() {
    // real para iene 
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 20.77;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + reais + " = " + moedaConvertida + ienes;
    document.getElementById("valor").value = "";
}

function converterRealParaBitcoin() {
    // real para bitcoin
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.0000043;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + reais + " = " + moedaConvertida + bictoins;
    document.getElementById("valor").value = "";
}

function converterDolarParaReal() {
    // dolar para real
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 5.29;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + dolares + " = " + moedaConvertida + reais;
    document.getElementById("valor").value = "";
}

function converterDolarParaEuro() {
    // dolar para euro
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.86;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + dolares + " = " + moedaConvertida + euros;
    document.getElementById("valor").value = "";
}

function converterDolarParaLibra() {
    // dolar para libra
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.73;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + dolares + " = " + moedaConvertida + libras;
    document.getElementById("valor").value = "";
}

function converterDolarParaIene() {
    // dolar para iene
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 109.88;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + dolares + " = " + moedaConvertida + ienes;
    document.getElementById("valor").value = "";
}

function converterDolarParaBitcoin() {
    // dolar para bitcoin
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.000023;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + dolares + " = " + moedaConvertida + bictoins;
    document.getElementById("valor").value = "";
}

function converterEuroParaReal() {
    // euro para real
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 6.18;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + euros + " = " + moedaConvertida + reais;
    document.getElementById("valor").value = "";
}

function converterEuroParaDolar() {
    // euro para dolar
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 1.17;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + euros + " = " + moedaConvertida + dolares;
    document.getElementById("valor").value = "";
}

function converterEuroParaLibra() {
    // euro para libra
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.86;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + euros + " = " + moedaConvertida + libras;
    document.getElementById("valor").value = "";
}

function converterEuroParaIene() {
    // euro para iene
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 128.47;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + euros + " = " + moedaConvertida + ienes;
    document.getElementById("valor").value = "";
}

function converterEuroParaBitcoin() {
    // euro para bitcoin
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.000027;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + euros + " = " + moedaConvertida + bictoins;
    document.getElementById("valor").value = "";
}

function converterLibraParaReal() {
    // libra para real
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 7.20;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + libras + " = " + moedaConvertida + reais;
    document.getElementById("valor").value = "";
}

function converterLibraParaDolar() {
    // libra para dolar
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 1.36;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + libras + " = " + moedaConvertida + dolares;
    document.getElementById("valor").value = "";
}

function converterLibraParaEuro() {
    // libra para euro
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 1.17;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + libras + " = " + moedaConvertida + euros;
    document.getElementById("valor").value = "";
}

function converterLibraParaIene() {
    // libra para iene
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 149.72;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + libras + " = " + moedaConvertida + ienes;
    document.getElementById("valor").value = "";
}

function converterLibraParaBitcoins() {
    // libra para bitcoin
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.000031;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + libras + " = " + moedaConvertida + bictoins;
    document.getElementById("valor").value = "";
}

function converterIeneParaReal() {
    // iene para real
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.048;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + ienes + " = " + moedaConvertida + reais;
    document.getElementById("valor").value = "";
}

function converterIeneParaDolar() {
    // iene para dolar
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.091;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + ienes + " = " + moedaConvertida + dolares;
    document.getElementById("valor").value = "";
}

function converterIeneParaEuro() {
    // iene para euro
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.0078;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + ienes + " = " + moedaConvertida + euros;
    document.getElementById("valor").value = "";
}

function converterIeneParaLibra() {
    // iene para libra
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.0067;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + ienes + " = " + moedaConvertida + libras;
    document.getElementById("valor").value = "";
}

function converterIeneParaBitcoin() {
    // iene para bitcoin
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 0.00000020;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + ienes + " = " + moedaConvertida + bictoins;
    document.getElementById("valor").value = "";
}

function converterBitcoinParaReal() {
    // bitcoin para real
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 230880;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + bictoins + " = " + moedaConvertida + reais;
    document.getElementById("valor").value = "";
}

function converterBitcoinParaDolar() {
    // bitcoin para dolar
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 43632.78;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + bictoins + " = " + moedaConvertida + dolares;
    document.getElementById("valor").value = "";
}

function converterBitcoinParaEuro() {
    // bitcoin para euro
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 37353.54;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + bictoins + " = " + moedaConvertida + euros;
    document.getElementById("valor").value = "";
}

function converterBitcoinParaLibra() {
    // bitcoin para libra
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 32072.47;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + bictoins + " = " + moedaConvertida + libras;
    document.getElementById("valor").value = "";
}

function converterBitcoinParaIene() {
    // bitcoin para iene
    let valor = parseFloat(document.getElementById("valor").value);
    moedaConvertida = valor * 4800470.40;
    moedaConvertida = moedaConvertida.toFixed(2);
    elementoResultado.innerHTML = valor + bictoins + " = " + moedaConvertida + ienes;
    document.getElementById("valor").value = "";
}