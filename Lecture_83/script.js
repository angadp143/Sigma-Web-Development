let students = ["Shubh", "Anjali", "Priyanka", "Sabhya", "Reeta", "Shubham", "Krishna", "Ravindra", "Shivesh", "Kaif", "Emanuel"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor")
    }
    else if (student.length < 8) {
        houses.push("Huffelpuff")
    }
    else if (student.length < 12) {
        houses.push("Revenclow")
    }
    else {
        houses.push("Slytherin")
    }

}

console.log(houses)