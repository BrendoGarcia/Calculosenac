function calcularMedia() {
    var excelente = parseFloat(document.getElementById('excelente').value) || 0;
    var otimo = parseFloat(document.getElementById('otimo').value) || 0;
    var bom = parseFloat(document.getElementById('bom').value) || 0;
    var naoSuficiente = parseFloat(document.getElementById('nao_suficiente').value) || 0;

    var totalNotas = excelente + otimo + bom + naoSuficiente;
    var quantidadeNotas = (excelente ? 1 : 0) + (otimo ? 1 : 0) + (bom ? 1 : 0) + (naoSuficiente ? 1 : 0);

    if (quantidadeNotas === 0) {
        alert("Por favor, insira pelo menos uma nota.");
        return;
    }

    var media = totalNotas / quantidadeNotas;
    document.getElementById('media').innerText = "Média = " + media.toFixed(1);
}
