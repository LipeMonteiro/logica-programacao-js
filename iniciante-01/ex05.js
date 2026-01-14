// Dada uma string retorne ela invertida

function invertString (string) {

    let invertida = ""

    for (let i = string.length - 1; i >= 0; i--){
        invertida += string[i];
    };

    console.log(invertida);
};

invertString("Programação")