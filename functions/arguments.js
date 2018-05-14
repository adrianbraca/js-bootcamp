let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score ' + score
}

let scoreText = getScoreText(undefined, 12)
console.log(scoreText)

// Challenge Area
// total, tipPercent
// Tip Calculator

let tipCalculator = function (total = 0, tipPercent = 20) {
    let tip = total * (tipPercent / 100)
    return `A ${tipPercent}% tip on $${total} would be $${tip}`
}


let tip1 = tipCalculator(40)
console.log(tip1)

// Template Strings
let name = 'Batman'
console.log(`I am ${name}!`)