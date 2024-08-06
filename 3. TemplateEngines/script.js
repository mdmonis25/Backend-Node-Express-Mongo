const express = require('express');
const app = express();
app.set("view engine","ejs");
app.use(express.static("./public"));
app.get("/",(req,res)=>{
    res.render("index",{skills:"React, React Native, Node, Express, Mongo, JavaScript, Java"});
})
app.get("/error",(req,res,next)=>{
    throw Error ("Error aa gi gaya");
})

app.use(function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(5555);