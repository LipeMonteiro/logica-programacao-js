//Verifique se um número é primo

/*Um número primo é aquele que só é divisível por 1 e por ele mesmo.
Receba um número e diga se ele é primo ou não.*/

let n = 9;

let primo = true;

if (n <= 1) {
  primo = false;
}

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    primo = false;
  }
}

if (primo) {
  console.log(`${n} é primo`);
} else {
  console.log(`${n} não é primo`);
}
