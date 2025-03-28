import mysql2 from "mysql2";
import express from "express";

const app = express()

app.use(express.json())

// const tableName = "info"

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
})

connection.connect((error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("Database Connected...");
    }
})

app.post("/insert", (req,res)=>{
    const data = req.body
    connection.query("insert into info set ?", data, (error,result)=>{
        res.send(result)
    })
})

app.get("/getData", (req,res)=>{
    connection.query("select * from info", (error,result)=>{
        res.send(result)
    })
})

app.put("/update/:id", (req,res)=>{
    const {name, email, phone} = req.body
    const updateData = [name, email, phone, req.params.id]
    connection.query("update info set name=?,email=?,phone=? where id=?",updateData,(error,result)=>{
        res.send(result)
    })
})

app.delete("/delete/:id", (req,res)=>{
    const deleteId = req.params.id
    connection.query("delete from info where id=?",deleteId,(error,result)=>{
        res.send(result)
    })
})

app.listen(3000, ()=>{
    console.log("Server Running on 3000");
})