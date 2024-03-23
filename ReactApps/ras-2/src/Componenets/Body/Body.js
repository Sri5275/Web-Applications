import React from 'react'
import Child from './Child'
import './Body.css'
function Body() {
    let array=[
        {
            name:"Suresh",
            year:1998,
            Salary:45000,
            image:"https://media.istockphoto.com/id/1324786380/photo/young-handsome-smiling-man-in-brown-shirt-and-glasses-feeling-confident-isolated-on-gray.jpg?b=1&s=170667a&w=0&k=20&c=7yoJXyEpncSC4wXBuuDeRgelV1lfAEqWmzCuu3JfRqg= "
        },
        {
            name:"Ramesh",
            year:1989,
            Salary:54000,
            image:"https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs="
        },
        {
            name:"Prabesh",
            year:1999,
            Salary:60000,
            image:"https://media.istockphoto.com/id/1076475566/photo/young-indian-businessman-over-white-background.jpg?s=612x612&w=0&k=20&c=5ym2TEfKJmyamgv_vJnKAirDY-O_OafvHhPKy9ilkS4="
        },
        {
            name:"Somesh",
            year:1999,
            Salary:78000,
            image:"https://media.istockphoto.com/id/1068369558/photo/portrait-of-successful-serious-handsome-afroamerican-man-in-shirt-crossed-hands-and-smiling.jpg?s=612x612&w=0&k=20&c=F32ezv5W5ZgBlrZ-Ka7UUi35jKUNZUikg23djE9bXMQ="
        },
        {
            name:"Labesh",
            year:1990,
            Salary:89000,
            image:"https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?w=2000"
        },
        {
            name:"Sobesh",
            year:2000,
            Salary:82000,
            image:"https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
        },
    ]
  return (
    <div class="main " >
        <div class="ras2 card ">
            <div class="card-body row row-cols-3">
            {array.map((value,index)=>{
                return <Child data={value} key={index}/>
            })}
            </div>

        </div>
    </div>
  )
};

export default Body