const express = require("express")
const app = express()
const mysql=require("mysql")
const db=mysql.createPool({
    host:'localhost',
    port: 3306,
    user:'root',
    password: 'salman',
    database:'crypto',
})
//app.use(cors())

app.get("/",(req, res)=>{
    //const name=body.req.name
    //const email=body.req.email
    //const password=body.req.password;
    const sqlin="INSERT INTO register (name,email,password) VALUES ('ab','ab','ab')"
    db.query(sqlin,(err, result)=>{
        console.log(err);
    }
    )
})


app.listen(3001,()=>{
    console.log("server up and running");
})