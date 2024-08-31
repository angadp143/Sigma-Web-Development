function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are awesome!")
    console.log("Hey " + name + " you are fabulous!")

}

function sum(a, b, c = 3) {       //c=3 default value in parameters
    //console.log(a + b)
    console.log(a, b, c)
    return a + b + c

}

result1 = sum(6, 5)
result2 = sum(46, 5)
result3 = sum(96, 5)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(31);
func1(11);
func1(51);


// console.log("Hey Angad you are nice!")
// console.log("Hey Angad you are good!")
// console.log("Hey Angad you are awesome!")
// console.log("Hey Angad you are fabulous!")