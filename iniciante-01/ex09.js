/* 9. Retorne apenas os números positivos de uma lista

Descrição: Dada uma lista de números inteiros, retorne uma nova lista apenas com os números positivos.

Entrada: [-2, 5, 0, -8, 7]

Saída esperada: [5, 7] */

let numbers = [-2, 5, 0, -8, 7];

function checkPositiveNumber (numbers) {

    let positives = [];

    for (let i of numbers) {

        if (i > 0) positives.push(i);

    };

    return positives;

};

console.log(checkPositiveNumber(numbers));
