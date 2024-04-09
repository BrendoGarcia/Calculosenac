function calcularMedia() {
    var conceitos = {
        "excelente": 9.75,
        "ótimo": 8.5,
        "bom": 7.25,
        "não suficiente": 5.75
    };

    var excelente = conceitos[document.getElementById('excelente').value.toLowerCase()] || 0;
    var otimo = conceitos[document.getElementById('otimo').value.toLowerCase()] || 0;
    var bom = conceitos[document.getElementById('bom').value.toLowerCase()] || 0;
    var naoSuficiente = conceitos[document.getElementById('nao_suficiente').value.toLowerCase()] || 0;

    var totalNotas = excelente + otimo + bom + naoSuficiente;
    var quantidadeNotas = (excelente ? 1 : 0) + (otimo ? 1 : 0) + (bom ? 1 : 0) + (naoSuficiente ? 1 : 0);

    if (quantidadeNotas === 0) {
        alert("Por favor, insira pelo menos um conceito válido.");
        return;
    }

    var media = totalNotas / quantidadeNotas;
    document.getElementById('media').innerText = "Média = " + media.toFixed(1);
}
