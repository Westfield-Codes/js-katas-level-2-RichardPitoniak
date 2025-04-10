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