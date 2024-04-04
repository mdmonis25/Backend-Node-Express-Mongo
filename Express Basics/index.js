// Express is a framework of Node js which is a runtime environment for javascript
// Node Js simply google a v8 engine hai jisko wrap kiya hai javascript me
// V8 Javascript Runtime environment hai C++ code ka likha hua

const express = require('express');
const app = express();

// Ye hai Middleware - ye server ke paas request jaane ke baad aur route chalne se pehle exucute hota hai
// kuchh bhi execute hone se pehle middleware chalta hai 
app.use(function(req,res,next){
    res.send("Middleware hai ye");
    next();
})// middleware kitne bhi ho sakte hai 
// request yahan ruk jaati hai, to usko route tak push karna padta hai (next wahi karta hai)


// get method route is used to get data from server, data is stored in req or request object
// "/" is the default route
app.get("/",(req,res)=>{
    res.send("Allahu Akbar");
})

// "/monis" is also a route
// res is response from server
app.get("/monis",(req,res)=>{
    res.send("Monis ");
})

app.listen(3000);