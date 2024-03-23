let a=[1,2,3,4,5];
for(let j=0;j<a.length;j++){
if(a[j]==2)
console.log("a is prime number",a[j]);
else{
    let f=0;
    for(let i=a[j]-1;i>0;i--){
        if(a[j]%i==0)
         f++;
        else 
        continue;
    }
    if(f==1)
    console.log("a is primenumber",a[j]);
  
}
}