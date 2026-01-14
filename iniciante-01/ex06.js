// Verifique se uma palavra é um palíndromo

function verificaPalindromo (string) {
    let invertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i]
    };
    
    if (invertida == string) console.log(`${string}: É um palíndromo`);
    else console.log(`${string}: Não é um palíndromo`);
}

verificaPalindromo("radar")


