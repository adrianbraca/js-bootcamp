let myAccount = {
    name: 'Andre Mead',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.58)
console.log(myAccount)


// ***Challenge Area***

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let name = account.name
    let income = account.income
    let expenses = account.expenses
    let balance = income - expenses
    let summary = `Account for ${name} has $${balance}. $${income} in income. $${expenses} in expenses.`
    return summary
}

addIncome(myAccount, 2000)
addExpense(myAccount, 500)
addExpense(myAccount, 1400)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))