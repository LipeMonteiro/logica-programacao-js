// Conte quantas vogais existem em uma palavra

function verificaVogais(string) {;
  const vogais = ["a", "e", "i", "o", "u", "f"];
  let qtd = 0;

  for (let letra of string.toLowerCase()) {;
    if (vogais.includes(letra)) {;
      qtd++;
    };
  };
  return qtd;
};

const palavra = "Filipe";
const totalVogais = verificaVogais(palavra);

console.log(`${palavra} tem ${totalVogais} vogais.`);

