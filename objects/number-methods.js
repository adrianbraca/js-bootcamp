let num = 103.941

console.log(num.toFixed(2))

// Challenge Guessing Game

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Number is ${randomNum}`)
    return guess === randomNum
}

console.log(makeGuess(2))