import employees from "./9.JS";
console.log("Nmaes of employees of Hyderabad")
for(let element of employees){
if(element.address.city=='hyderabad')
console.log(element.name)}
/*Names of Employees whose age between 40 and 50*/ 
console.log("Names of Employees whose age between 40 and 50")
let ageOfEmployees=employees.filter((element)=>element.age>=40 && element.age<=50)
for(let element of ageOfEmployees)
console.log(element.name)
console.log("Nmaes of employees who are not from Hyderabad")
for(let element of employees){
if(element.address.city!='hyderabad')
console.log(element.name)}
console.log("Names of employees whose skill is ReactJS")
for(let element of employees){
    for(let skill of element.skills)
if(skill=='reactjs')
console.log(element.name)}