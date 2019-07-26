//The value saved to kelvin will stay constant.
const kelvin = 0;
//Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
// Calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding down the fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
