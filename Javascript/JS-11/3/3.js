let btn1=document.querySelector(".one");
let btn2=document.querySelector(".two");
let btn3=document.querySelector(".three");
let btn4=document.querySelector(".four");
let maindiv=document.querySelector(".main");
btn1.addEventListener("click",()=>{
    let a=(+num1.value);
    let b=(+num2.value);
    let h3=document.createElement("h3");
    h3.textContent="Addition of two numbers:";
   h3.style.color="orange";
    let res=a+b;
    let add=document.createElement("h2");
    add.textContent=res;
    add.style.color="blue";
    maindiv.append(h3);
    maindiv.append(add);
  
});
btn2.addEventListener("click",()=>{
    let a=(+num1.value);
    let b=(+num2.value);
    let h3=document.createElement("h3");
    h3.textContent="Subtraction of two numbers:";
   h3.style.color="black";
   
    let res=a-b;
    let sub=document.createElement("h2");
    sub.textContent=res;
    sub.style.color="red";
    maindiv.append(h3);
    maindiv.append(sub);

});
btn3.addEventListener("click",()=>{
    let a=(+num1.value);
    let b=(+num2.value);
    let h3=document.createElement("h3");
    h3.textContent="Multiplication of two numbers:";
   h3.style.color="green";
   
    let res=a*b;
    let mul=document.createElement("h2");
    mul.textContent=res;
    mul.style.color="darkviolet";
    maindiv.append(h3);
    maindiv.append(mul);

});
btn4.addEventListener("click",()=>{
    let a=(+num1.value);
    let b=(+num2.value);
    let h3=document.createElement("h3");
    h3.textContent="Division of two numbers:";
   h3.style.color="violet";
  
   
    let res=a/b;
    let divi=document.createElement("h2");
    divi.textContent=res;
    maindiv.append(h3);
    maindiv.append(divi);

});
