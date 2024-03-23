let a=197;
let f=0;
if(a==2)
console.log("a is prime number",a);
else{
    for(let i=a-1;i>0;i--){
        if(a%i==0)
f++;
else continue;
    }
    if(f==1)
    console.log("a is primenumber",a);
    else
    console.log("a is not prime number",a);
}