const studentFlavors = []
function askflavor(){
    let name = prompt ("enter the name of a student")
    let flavor = prompt ("enter the name of a flavor")
    let pair = [name,flavor]
    return pair
}
function main(){
    studentFlavors.push(askflavor())
    let moreStudents = confirm ("more students?")
    if ( moreStudents = true) studentFlavors.push(askflavor())
    alert (studentFlavors.toString())
    let name = prompt ("which student?")
    
}
function goodName(test){
    for (let name = 0; name < studentFlavors.length; name++){
        if (studentFlavors[name[0]])
    }
}