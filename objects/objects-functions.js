let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
// Create function - take fahrenheit in - return object with all three

let convertTemp = function (temp) {
    let fahrenheit = temp
    return {
        fahrenheit: temp,
        celsius : (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let fahrenheitConvert = convertTemp(75)

console.log(fahrenheitConvert.fahrenheit)
console.log(fahrenheitConvert.celsius)
console.log(fahrenheitConvert.kelvin)