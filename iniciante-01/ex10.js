/* Converta uma temperatura de Celsius para Fahrenheit

Descrição: Dado um valor em Celsius, converta e retorne o valor equivalente em Fahrenheit.

Fórmula: `F = C × 1.8 + 32`

Entrada: 0
Saída esperada: 32 */

let fahrenheit = 0;

function convertToFahrenheit(celsius) {
  fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

console.log(convertToFahrenheit(30));
