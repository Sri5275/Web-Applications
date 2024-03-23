let students=[
    {
        name:"ravi",
        marks:{
            maths:89,
            physics:70,
            chemistry:88
        }
    },
    {
        name:"bhanu",
        marks:{
            maths:98,
            physics:50,
            chemistry:68
        }
    },
    {
        name:"kiran",
        marks:{
            maths:50,
            physics:82,
            chemistry:94
        }
    },
]
//Using For-of loop method
// for(let studentsObj of students){
// console.log(studentsObj.name);
// }
//using forEach lopp method
// students.forEach((studentsObj,index)=>console.log(index,studentsObj.name));
// console.log(students[0].marks.maths);
// console.log(students[0].name);
//let m=students.reduce((accumulator,students[index].marks.maths)=>accumulator>students[index].marks.maths?accumulator:students[index].marks.maths);
//console.log(m)
//let m=students.forEach((studentsObj,index)=>console.log(index,studentsObj.name));
//Name of person who got highest marks in maths
let max=0;
for(let index=0;index<students.length;index++){
    if(max<students[index].marks.maths)
    max=students[index].marks.maths;
    else continue;
}
let mathsname=students.find((students)=>students.marks.maths==max);
console.log("Name of the person who got highest marks in Maths:",mathsname.name);
//Name of person who got highest marks in physics
let ma=0;
for(let index=0;index<students.length;index++){
    if(ma<students[index].marks.physics)
    ma=students[index].marks.physics;
    else continue;
}
let physicsname=students.find((students)=>students.marks.physics==ma);
console.log("Name of the person who got highest marks in physics:",physicsname.name);
//Name of person who got highest marks in chemistry
let m=0;
for(let index=0;index<students.length;index++){
    if(m<students[index].marks.chemistry)
    m=students[index].marks.chemistry;
    else continue;
}
let chemname=students.find((students)=>{
    return students.marks.chemistry == m;
});
console.log("Name of the person who got highest marks in chemistry:",chemname.name);
/*for(let index=0;index<students.length;index++){
    console.log((students[index].marks.physics))
    }
    for(let index=0;index<students.length;index++){
        console.log((students[index].marks.chemistry))
        }
//let big=students.reduce((maxmaths,students[index].marks.maths)=>maxmaths>students[index].marks.maths?maxmaths:students[index].marks.maths)
*/
//Doubts
// HOw can wedo theabove loops in forEach loop
// And to how to return the respective highest scorer name instesd of accesssing it through the object
// As in the above example object is being stored in variable and accessing the name throught it again by dot operator