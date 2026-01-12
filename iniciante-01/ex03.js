//Verifique se o número e ímpar ou par 

function numberVerify (number) {
    let result = ""
    number % 2 == 0 ? result = "Even" : result = "Odd";

    return result

} 


console.log(numberVerify(11))
