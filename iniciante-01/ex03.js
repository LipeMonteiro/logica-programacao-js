//Verifique se o número e ímpar ou par 

function numberVerify (numero) {
    if (numero % 2 == 0) return `O número ${numero} é par`

    else return `O número ${numero} é ímpar`
} 


console.log(numberVerify(11))
