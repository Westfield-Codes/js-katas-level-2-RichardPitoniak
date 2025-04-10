/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */


/* Prompt */

/* Prompt with Conditional */


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */



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