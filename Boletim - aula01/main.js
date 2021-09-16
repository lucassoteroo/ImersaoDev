function calcular() {
    var nomeAluno = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota01").value);
    var nota2 = parseFloat(document.getElementById("nota02").value);
    var nota3 = parseFloat(document.getElementById("nota03").value);
    var nota4 = parseFloat(document.getElementById("nota04").value);
    var somaNotas = (nota1 + nota2 + nota3 + nota4);
    var media = somaNotas / 4;
    var notaFinal = media.toFixed(1);
    if (notaFinal >= 7) {
        var resultado = "Aprovado(a)";
    } else {
        var resultado = "Reprovado(a)";
    }
    document.getElementById("situacao").innerHTML = "O aluno(a) " + nomeAluno + " teve uma média de " + media + " e sua situação é " + resultado;
}