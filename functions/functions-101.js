// Function - input, code, output(return value)

let greetUser = function () {
    console.log('welcome user')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


// Challenge Area

// convert fahrenheitToCelsius

// Call a couple of times 

// Print the converted values

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