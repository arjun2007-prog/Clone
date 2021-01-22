const express = require("express");


const app = express();
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/home.html");
})

app.listen(3000,()=>{
    console.log("Succesfully hosted the files on the port 3000");
})