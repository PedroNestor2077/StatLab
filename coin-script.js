function playCoins() {

    // pegar o numero de moedas
    const inputNumCoins = document.getElementById("number-of-coins");
    const numberCoins = Number(inputNumCoins.value);

    // pegar o numero de lancamentos
    const inputNumThrows = document.getElementById("number-of-throws");
    const numberThrows = Number(inputNumThrows.value);

    // simular experimento
    let numberHeads = 0;
    let numberTails = 0;
    const totalCoins = numberCoins * numberThrows;
    for (i = 0; i < totalCoins; i++) {
        if (Math.round(Math.random()) == 0) {
            numberHeads += 1;
        } else {
            numberTails += 1;
        }
    }

    // calcular porcentagens
    const percentHeads = 100 * numberHeads / totalCoins;
    const percentTails = 100 * numberTails / totalCoins;

    // mostrar resultados
    const divResults = document.getElementById("results");
    divResults.style.display = "block";

    // atualizar o numero e porcentagem de caras apresentado
    const pNumHeads = document.getElementById("number-of-heads");
    pNumHeads.innerHTML = `${numberHeads} (${percentHeads} %)`;

    // atualizar o numero de coroas apresentado
    const pNumTails = document.getElementById("number-of-tails");
    pNumTails.innerHTML = `${numberTails} (${percentTails} %)`;
}