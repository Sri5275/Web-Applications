fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    return data.json();
}).then((objectData)=>{
    for( i in objectData)
    insValues(objectData[i]);
}).catch((error)=> console.error("error is",error));
let tableBody=document.querySelector(".main")

function insValues(data){
    let userid =document.createElement('td');
    let id=document.createElement('td');
    let title=document.createElement('td');
    let completed=document.createElement('td')

    userid.textContent=data["userId"];
    id.textContent=data["id"];
    title.textContent=data["title"];
    completed.textContent=data["completed"];

    let row=document.createElement('tr')
    row.appendChild(userid);
    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(completed);
    tableBody.appendChild(row);
}
