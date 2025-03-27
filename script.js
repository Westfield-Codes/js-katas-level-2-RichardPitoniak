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
else if (operation == "-") {result = subtract(a,b)}
else if (operation == "*") {result = multiply(a,b)}
else if (operation == "/") {result = divide(a,b)}
alert (a + operation + b + " = " + result)
}

function add(a,b){
return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

/* ************************************* */
