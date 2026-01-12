//Receba uma lista de inteiros e retorne quantos números pares existem nela.

const numeros = [1, 2, 3, 4, 5, 6];

function verificaNumeroPar (array) {

    let pares = [];

    for (n of numeros) {
        if (n % 2 == 0) pares.push(n)
    };

    console.log(`Quantidade de pares: ${pares.length}`);
    console.log(`Números pares: ${pares}`)

};

verificaNumeroPar(numeros);
