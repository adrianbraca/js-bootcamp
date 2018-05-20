let name = 'Andrew Mead'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password'
console.log(password.includes('password'))

// Trim Method
console.log(name.trim())

// Challenge area

// isValidPassword
// length is more than 8 and it doesn't contain the word password

let isValidPassword = function (password) {
    if (password.length <= 8 || password.includes('password')){
        return false
    }
    else {
        return true
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('adf;asdf;oijpassword'))