module.exports = function warmup(temperature) {
const celsius = temperature ;
let fahrenheit = celsius * (9 / 5) + 32 ;
Math.floor(fahrenheit);
return fahrenheit;
};
