/* SHOPPING LIST KATA:  */

// Every day, you are sent to buy 5 items. 

/* 1. for loop and string concatenation */

/* Function makeList()
 * Create a shopping list string called shoppingList as "To Buy:"
 * create a five-item loop, and in the loop, 
 * ask for next item to buy (item #), and add it to the list 
 * add a line break after each item added
 * when loop's done, alert the list
 */

function main(){
    makeList()
}

 /* function makeList(){
    let shoppingList = "To buy: "
    for (let item = 1; item <= 5; item++ ){
       shoppingList+= prompt ("Item number " + item ) + "\n"
    }
    alert (shoppingList)
 }
*/
/* 2. for loop and array with toString */

/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/
 /* function makeList(){
    let shopArray = []
    for (let item = 1; item <= 5; item++ ){
       shopArray.push(prompt ("Item #" + item))
    }
    alert (shopArray.toString())
 }
*/

/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 
 function makeList(){
    let shopArray = []
    for (let item = 1; item <= 5; item++ ){
       shopArray.push(prompt ("Item #" + item))
    }
    alert (shopArray.join("\n"))
 }


/* 4. loops, arrays and functions */

/* Same function, using previous code, but THIS TIME:
 * store each item as a numbered item ["1. cookies","2. donuts"])   
 * using the loop index. */

/* MULTIPLICATION FREQUENCY KATA */

/* findTopFactor(array) analyzes an array of integers from 3-9
 * Loop over a list, and use another array, factorCount, to 
 * count how many of those factors appear in the list.  Use a 
 * loop from 0 to one less than array.length to look at
 * the next item and push it to the frequency array.  You'll end
 * up with something like [ 0 1 2 4 2 3 1] for an array [0, 1, 
 * 3, 4, 3, 4, 2, 4, 5, 4, 5, 6, 1, 2].  Output should be (with 
 * line breaks) something like: 0:0 1:1 2:2 3:2 4:4) 
 */
