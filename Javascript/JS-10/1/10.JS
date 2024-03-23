const a=25
let promObj=new Promise((fulfilled,rejected)=>{
    if(a%2==0){
        setTimeout(()=>{
        fulfilled('Given number is divisible by 2')
        },5000)
    }
    else{
        setTimeout(()=>{
        rejected('Given number is not divisible by 2')},5000)
    }
})
promObj.then((message)=>{
    console.log("After 5 seconds")
    console.log(message)
}).catch((message)=>{
    console.log("After 5 seconds")
    console.log(message)
})