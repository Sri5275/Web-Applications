const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Sri@5275",
    database:"proj"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/api/get", (req,res) => {
    const sqlGet="SELECT * FROM  store";
    db.query(sqlGet,(error, result) => {
        res.send(result);
    });
});
// app.get("/api/post", (req,res) => {
//    const {product_name,quantity_available,cost_per_kg_l,expiry_date}=req.body;
//    const sqlInsert=
//    "INSERT INTO store (product_name,quantity_available,cost_per_kg_l,expiry_date) VALUES (? ,? ,? ,? )";
//    db.query(sqlInsert, [product_name,quantity_available,cost_per_kg_l,expiry_date],(error,result)=> {
//     if(error){
//         console.log(error);
//     }
//    });
// });
// app.post('/api/post', (req, res) => {
//     let data = req.body;
//     res.send('Data Received: ' + JSON.stringify(data));
// })

// app.post('/api/post', (req, res) => {
//     const store = req.body;
//     const query = `INSERT INTO store (product_name, quantity_available, cost_per_kg_l, expiry_date)
//                    VALUES ('${store.product_name}', '${store.quantity_available}', ${store.cost_per_kg_l}, '${store.expiry_date}')`;
    
//     db.query(query, (error, results) => {
//       if (error) {
//         return res.status(500).json({ error });
//       }
//       else{
//         return res.send(results)
//       }
      
//       return res.json({ message: 'Product added successfully' });
//     });
//   });

app.get("/",(req,res) => {
    const sqlInsert="INSERT INTO store (product_name,quantity_available,cost_per_kg_l,expiry_date) values ('Sugar',90,75,'2023-09-14')";
    db.query(sqlInsert,(error,result) => {
        console.log("error",error);
        console.log("result",result);
    })
    res.send("Hello")
});

app.listen(5000,() => {
    console.log("On port 5000");
})
