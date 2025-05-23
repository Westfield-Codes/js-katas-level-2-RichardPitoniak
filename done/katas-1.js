/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

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
    let color = prompt ("enter a primary or secondary color ")
    if (checkColor(color) == false) {
         alert ("must be  a primary or secondary color")
         main()
    }
    else alert ("the complementary color of " + color + " is " + complementaryColor(color))
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
    if (color == "red" || color == "orange"|| color == "yellow"|| color == "green"|| color == "blue" || color == "purple") goodColor = true
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
function complementaryColor(color) {
let complement = ""
if (color == "red") complement = "green"
else if (color == "yellow") complement = "purple"
else if (color == "blue") complement = "orange"
else if (color == "green") complement = "red"
else if (color == "purple") complement = "yellow"
else if (color == "orange") complement = "blue"
return complement
// I am aware this is a really annoying way to code this, but it works 
}


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */
/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

/* Initialize Globals
 * Set a global variable myScoops = "Here's your cone with: "
 */
var myScoops = "Here's your cone with: "

/* FUNCTION main() 
 * initialize variable scoops, prompt user for "how many scoops (max 3)?"
 * if scoops is less than 4, call scoopLoop with argument scoops
 * otherwise display "oink oink" and call main again.
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let scoop = prompt("how many scoops? (3 max)")
    if (scoop < 4) scoopLoop(scoop)
    else {alert ("oink oink")
    main()
    }
}
/* FUNCTION scoopLoop(scoops) 
 * start scoop at 1 and loop while scoop is less than or equal to scoops
 * inside the loop add nextScoop(scoop) to myScoops
 * after the loop's done, display "Here's your cone with " myScoops
 * @param: scoops (integer)
 * @return: none
 */
function scoopLoop(scoops) {
for (let scoop = 1; scoop <= scoops; scoop++) {
myScoops += nextScoop(scoop)
}
alert (myScoops)
}

/* FUNCTION nextScoop(scoop)
 * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 * @param: scoop (integer)
 * @return: flavor (string)
 */
function nextScoop(scoop) { 
var flavor = prompt ("flavor for scoop number " + scoop)
return flavor 
// return "\n vanilla "
}

/* ************************************* */

/* PET */

/* PET KATA: Feed the Dog */

/* Var, Alert, Prompt, Function, Global */

/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let dogName = prompt ("name the dog")
    let cups = prompt ("how many cups of food does " + dogName + " get?")
    feedDog(dogName, cups)
}
/* FUNCTION feedDog(dogName, cups) */
/* Define a function called feedDog with string parameter dogName, number parameter cups.
 * Loop from cup = 1 to cups.  For each cup, display "Here's a cup of kibble, [dogName]!"
 * @param: dogName (string), cups (integer)
 * @return: none
 */ 
function feedDog(dogName, cups) {
    let cup = 0
    while(cup < cups) {
        alert ("here is a cup of kibble, " + dogName )
        cup++
    }
}

/* ************************************* */


/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Ask the user what operation they want (+, -, *, /)
 * Ask the user for the first number (a)
 * Parse a as an integer
 * Ask the user for the second number (b)
 * Parse b as an integer
 * Based on the operation, send the numbers to the right function as
 * arguments and store the returned value in variable called result
 * Alert the equation a + operation + b = result
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let operation = prompt (" + - * or /")
    let a = parseInt (prompt ("enter the first number"))
    let b = parseInt (prompt ("enter the second number"))
    let result = 0
    if (operation = "+") result = add(a,b)
    else if (operation = "-") result = subtract(a,b)
    else if (operation = "*") result = multiply(a,b)
    else if (operation = "/") result = divide(a,b)
    alert (a + operation + b + "=" + result)
}
/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
    let result = a+b
    return result
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b){
    let result = a-b
    return result
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function multiply(a,b){
    let result = a*b
    return result
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function divide(a,b){
    let result = a/b
    return result
}




