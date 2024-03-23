fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    return data.json();
}).then((objectData)=>{
    for( i in objectData)
    insGrid(objectData[i]);
}).catch((error)=> console.error("error is",error));
let mainDiv = document.querySelector(".body");

function insGrid(data){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("grid");
    let userId = document.createElement('h2');
    let id = document.createElement('h2');
    let title = document.createElement('h2');
    let completed = document.createElement('h2');

    userId.textContent = "User Id : " + data["userId"];
    id.textContent = "Id : " + data["id"];
    title.textContent = "Title : " + data["title"];
    completed.textContent = "Completed : " + data["completed"];

    cardDiv.appendChild(userId);
    cardDiv.appendChild(id);
    cardDiv.appendChild(title);
    cardDiv.appendChild(completed);

    mainDiv.appendChild(cardDiv);
}