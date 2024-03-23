let a=[10,20,,56,30,40,78,90,26,50];
//1st way -general way
let sum1= a.reduce(function(accumulator,element){
    return accumulator+element;
});
console.log(sum1);
//Using Arrow function
let sum2=a.reduce((accumulator,element)=>accumulator+element);
console.log(sum2);
