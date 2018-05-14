// Global scope (converFahrenheitToCelsius)
    // Local scope (temp, result)
    

let convertFahrenheitToCelsius = function (temp) {
    fahrenheit = temp
    let result = (fahrenheit - 32) * (5/9)
    return result
}

let temp1 = convertFahrenheitToCelsius(100)
let temp2 = convertFahrenheitToCelsius(32)
let temp3 = convertFahrenheitToCelsius(50)
let temp4 = convertFahrenheitToCelsius(75)

console.log(temp1)
console.log(temp2)
console.log(temp3)
console.log(temp4)