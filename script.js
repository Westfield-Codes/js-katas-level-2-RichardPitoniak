/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main (){
let operation = prompt ("+, -, *, /")
let a = parseInt (prompt ("Enter your first number"))
let b = parseInt (prompt ("Enter your second number"))
let result = 0
if (operation == "+") {result = add(a,b)}
else if (operation == "-") { result = subtract(a,b)}
else if (operation == "*") {result = multiply(a,b)}
else if (operation == "/") { result = divide(a,b)}
alert (a + operation + b + " = " + result)
}
/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
return a + b
}

/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b){
    return a - b
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function multiply(a,b){
    return a * b
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function divide(a,b){
    return a / b
}

/* ************************************* */
