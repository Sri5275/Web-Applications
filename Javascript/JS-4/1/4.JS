let student ={
    rollno:"R8",
    names:"saketh",
    m:[20,24,21],
    address:"Kphb,Hyderabad",
    getSummary:function () {
    marks= this.m[0]+this.m[1]+this.m[2];
    return marks;
    }
} ;
console.log("The Aggregate of Marks :",student.getSummary());