function calcularMedia() {
    // Obter os valores dos conceitos selecionados para cada disciplina
    let conceito_excelente1 = parseFloat(document.getElementById("conceito_excelente1").value);
    let conceito_excelente2 = parseFloat(document.getElementById("conceito_excelente2").value);
    let conceito_excelente3 = parseFloat(document.getElementById("conceito_excelente3").value);
    let conceito_excelente4 = parseFloat(document.getElementById("conceito_excelente4").value);
    let conceito_excelente5 = parseFloat(document.getElementById("conceito_excelente5").value);

    // Calcular a média das notas
    let media = (conceito_excelente1 + conceito_excelente2 + conceito_excelente3 + conceito_excelente4 + conceito_excelente5) / 5;

    // Exibir a média
    document.getElementById("media").innerText = "Média das notas: " + media.toFixed(2);
}
