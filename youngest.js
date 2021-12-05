var persons = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
]
function youngestPerson(students){
    let youngest = students[0];
    for(var i=0; i<students.length; i++){
        if(students[i].age<youngest.age){
            youngest = students[i];
        }
    }
    return youngest;
}
var result = youngestPerson(persons);
console.log(result);