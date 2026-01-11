/* Receba uma lista de números e retorne a média aritmética. */
const numbers = [10, 20, 30];

function calcAverage(array) {

    if (array == 0) return 0;

    let sum = 0;

    for (let number of array) {
        sum += number;
    };

    return sum / array.length;
  
}

console.log(calcAverage(numbers))