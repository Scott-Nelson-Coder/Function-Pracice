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