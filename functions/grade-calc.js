// Students score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let getGrade = function (score, possibleScore) {
    let gradePercent = (score / possibleScore) * 100
    let letterGrade = ''
    
    if (gradePercent >= 90){
        letterGrade = 'A'    
    }
    else if (gradePercent < 90 && gradePercent >= 80) {
        letterGrade = 'B'
    }
    else if (gradePercent < 80 && gradePercent >= 70) {
        letterGrade = 'C'
    }
    else if (gradePercent < 70 && gradePercent >= 60) {
        letterGrade = 'D'
    }
    else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${gradePercent}%)!`
}

let calculateGrade1 = getGrade (74, 75)
let calculateGrade2 = getGrade (85, 100)
let calculateGrade3 = getGrade (50, 50)
let calculateGrade4 = getGrade (18, 20)

console.log(calculateGrade1)
console.log(calculateGrade2)
console.log(calculateGrade3)
console.log(calculateGrade4)