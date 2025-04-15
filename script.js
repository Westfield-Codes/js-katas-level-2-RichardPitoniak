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
 * Set gateKeeper = randStudent(), the name of a random student in the list
 * Set keymaster = randNewStudent(), name of a different random student
 * Display gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
function main(){
    let count = prompt("how many students are there?")
    addStudents(count)
    let gateKeeper = randStudent()
    let keyMaster = randNewStudent()
    alert("gatekeeper = " + gateKeeper + " and keymaster = " + keyMaster )
}

/* Function addStudents(count)
 * Use the students array, nothing in it. 
 * Use a for loop to add student names to the students array.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
for (let student = 1; student <= count; student++){
    student.push(prompt("enter the student's name"))
}
}
/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Add name to picked array. 
 * Return the name of the random student
 * @param = none
 * @return = name {string}
 */
 function randStudent(){
    return "person 1"
 }
/* Function randNewStudent() (start with copy of randStudent)
 * Set student = "" and picked = 0. 
 * Loop while picked is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set name = element in students array at that random index.
 * Set picked = the index of that name the picked array. 
 * End the while loop.
 * Add name to picked array.
 * Return the name of the new random student
 * @param = none
 * @return = name {string}
 */
function randNewStudent(){
    return "person 2"
 }
 