let btn=document.querySelector(".btn");
let element=document.querySelector(".heading");
let mainDev=document.querySelector(".main");

function getFactors(){
let num=prompt();
let arr=[1,2,3,4,5,6,7,8,9];
element.textContent="Factors Of a Number! Click below button,If u want to Repeat!";
element.style.textAlign="center";
for(i in arr){
    if(num%arr[i]==0){
        let h2=document.createElement('h2');
        h2.textContent=arr[i];
        mainDev.appendChild(h2);
        h2.style.textAlign="center";
    }
}
}
btn.addEventListener("Factors",getFactorials());