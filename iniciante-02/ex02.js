//Fatorial de um número

/*Calcule o fatorial de um número `n`.

O fatorial de 5, por exemplo, é `5 * 4 * 3 * 2 * 1 = 120`*/

function fatorial(n) {
  let fatorado = 1;

  for (let i = n; i >= 1; i--) {
    fatorado *= i;
    console.log(fatorado);
  }

  return fatorado;
}

fatorial(5);
