const express = require('express');
const app = express();

app.use(function(req,res,next){
    // res.send("Middleware Running");
    console.log("MiddleWare")
    next();
})

app.get("/",(req,res)=>{
    res.send("Allahu Akbar");
})


app.get("/profile/:username",(req,res)=>{
    res.send(`This is profile of : ${req.params.username}`);
})

app.listen(3000);