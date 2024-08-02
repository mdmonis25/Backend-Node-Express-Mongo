const express = require('express');
const app = express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index",{skills:"React, React Native, Node, Express, Mongo, JavaScript, Java"});
})

app.listen(5555);