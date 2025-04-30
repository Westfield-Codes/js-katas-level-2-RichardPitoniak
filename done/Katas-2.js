/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
var students = []
// Create an array called picked, start empty. 
var picked = []
/* Function Main()
 * Set variable count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(), the sName of a random student in the list
 * Set keymaster = randNewStudent(), sName of a different random student
 * Display gatekeeper sName and keymaster sName for this kata
 * @param = none
 * @return = none
 */
function main(){
    let count = prompt("how many students are there?")
    addStudents(count)
    let gateKeeper = randStudent()
    let keyMaster = randStudent()
    alert("gatekeeper = " + gateKeeper + " and keymaster = " + keyMaster )
}

/* Function addStudents(count)
 * Use the students array, nothing in it. 
 * Use a for loop to add student sNames to the students array.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
for (let student = 1; student <= count; student++){
    students.push (prompt("enter the student's Name"))
}
console.log(students.toString())
}
/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Add sName to picked array. 
 * Return the sName of the random student
 * @param = count {integer}
 * @return = sName {string}
 */
 function randStudent(){
    let student = Math.floor(Math.random()*students.length)
    let sName = students[student]
    students.splice(student)
    return sName
 }
/* Function randNewStudent() (start with copy of randStudent)
 * Set sName = "" and pickedYet = 0. 
 * Loop while pickedYet is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Set picked = the index of that sName in the picked array. 
 * End the while loop.
 * Add sName to picked array.
 * Return the sName of the new random student
 * @param = none
 * @return = sName {string}
 */
/* COLOR WHEEL KATA */

/* Var Alert Prompt Conditional Switch 3 Functions */

/* FUNCTION main() 
 * create a variable called color and prompt the user for a primary or secondary color
 * if checkColor(color) says false, say "must be primary or secondary" and call main again.
 * otherwise, display "the complementary color of [color] is [complementaryColor(color)]"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let color = prompt("enter a primary or secondary color")
    if (!checkColor(color)) {
        alert ("must be a primary or secondary color")
        main()
    }
    else alert("the complementary color of " + color + " is " + complementaryColor(color))
}
/* FUNCTION checkColor (color)
 * set boolean goodColor to false
 * use a compound conditional (or) to check for primary
 * if it's a primary color, set goodColor to true
 * otherwise, use a compound conditional (or) to check for secondary
 * if it's a secondary color, set goodColor to true
 * return goodColor
 * @param: color (string)
 * @return: goodColor (boolean)
 */
function checkColor(color){
let goodColor = false
if (color == "red" || color == "yellow" || color == "blue") goodColor = true
else if (color == "orange" ||color == "green" || color == "purple") goodColor = true
return goodColor
}

/* FUNCTION complementaryColor(color)
 * create a variable called complement, set to ""
 * use a switch function and switch on color
 * (look at this: https://www.canva.com/colors/color-wheel)
 * in the switch, assign the complementary color to complement
 * @param: color (string)
 * @return: complement (string)
 */
function complementaryColor(color){
    let complement=""
    switch(color){
        case "red": 
        complement = "green"
        break
        case "orange": 
        complement = "blue"
        break
        case "yellow": 
        complement = "purple"
        break
        case "green": 
        complement = "red"
        break
        case "blue": 
        complement = "orange"
        break
        case "purple": 
        complement = "yellow"
        break
    }
    return complement
}
/* same thing but with arrays this time  */

/* COLOR WHEEL KATA */

/* Var Alert Prompt Conditional Switch 3 Functions */

/* FUNCTION main() 
 * create a variable called color and prompt the user for a primary or secondary color
 * if checkColor(color) says false, say "must be primary or secondary" and call main again.
 * otherwise, display "the complementary color of [color] is [complementaryColor(color)]"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
const colorList = ["red","orange","yellow","green","blue","purple"]
function main(){
    let color = prompt("enter a primary or secondary color")
    if (!checkColor(color)) {
        alert ("must be a primary or secondary color")
        main()
    }
    else alert("the complementary color of " + color + " is " + complementaryColor(color))
}
/* FUNCTION checkColor (color)
 * set boolean goodColor to false
 * use a compound conditional (or) to check for primary
 * if it's a primary color, set goodColor to true
 * otherwise, use a compound conditional (or) to check for secondary
 * if it's a secondary color, set goodColor to true
 * return goodColor
 * @param: color (string)
 * @return: goodColor (boolean)
 */
function checkColor(color){
let goodColor = false

if (colorList.includes(color)) goodColor = true
return goodColor
}

/* FUNCTION complementaryColor(color)
 * create a variable called complement, set to ""
 * use a switch function and switch on color
 * (look at this: https://www.canva.com/colors/color-wheel)
 * in the switch, assign the complementary color to complement
 * @param: color (string)
 * @return: complement (string)
 */
function complementaryColor(color){
    let complement=""
    let index = colorList.indexOf(color)
    if ( index < 3) { complement = colorList.at(colorList.indexOf(color) + 3)}
    else complement = colorList.at(colorList.indexOf(color) - 3)
    return complement
}