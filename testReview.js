console.log("Hello World!")


// simple function to log out someones name
function firstName(name) {
    console.log(name)
}

firstName("Scott")

//function that will log out a random number
function randomNumber() {
    console.log(Math.floor(Math.random() * 50) + 1)
}

randomNumber()


// Function that takes the random number and returns a students grade
let studentGrade = Math.floor(Math.random() * 100) + 1

 function calculateScore() {
    if(studentGrade >= 90) {
        return "Your grade is an A!"
    } else if(studentGrade < 90 && studentGrade >= 80) {
        return "Your grade is a B"
    } else if(studentGrade < 80 && studentGrade >= 70) {
        return "Your grade is a C"
    } else if(studentGrade < 70 && studentGrade >= 60) {
        return "Your grade is a D"
    } else {
        return "Your grade is an F"
    }
 }

 console.log(calculateScore(studentGrade))

 function multiplyNum(a, b) {   
        return a * b
 }

 console.log(multiplyNum(2, 2))
 
// simple function to greet someone
function greet(name) {
    return `Hello ${name}, how are you?`
}

console.log(greet("Tim"))

// function to find the average
function findAverage(a, b, c, d) {
    let num = a + b + c + d
    return num / 4
}

console.log(findAverage(5,3,9,6))

function greeting2(firstName, lastName) {
    return `Hello ${firstName,lastName}, what are you doing tonight?`
}

console.log(greeting2("Scott", "Nelson"))

function repeat(msg, reps) {
     for (let i = 0; i < reps; i++) {
        console.log("Hi")
    }
   
}

repeat("Hi", 5)