//Encontre o maior e o menor número de uma lista

const numeros = [3, 7, 1, 9, 4];

let maior = numeros[0];
let menor = numeros[0];

for (let i of numeros) {
    if (i > maior) maior = i;
    if (i < menor) menor = i;
}

console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);