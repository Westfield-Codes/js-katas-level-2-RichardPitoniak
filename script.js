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

/* ************************************* */
