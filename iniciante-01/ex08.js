// 8. Some todos os números de 1 até N

/* **Descrição:**

Receba um número `N` e retorne a soma de todos os números de 1 até `N`. 

Entrada: 5
Nesse caso: 1+2+3+4+5

Saída esperada: 15
*/

function addNumbers (numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        console.log(`${soma} + ${i}`);
        soma += i;
    };
    return soma;
};

console.log(addNumbers(5));
