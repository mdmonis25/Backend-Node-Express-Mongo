var express = require("express");
var router = express.Router();
var userModel = require("./users");

router.get("/", (req, res) => {
  //using session
  req.session.ban = true; 
  res.render("index");
});

// checking session
router.get("/checkban",async (req,res)=>{
  if(req.session.ban === true) res.send("You are banned");
  else res.send("Not Banned");
})

//deleting or destroying session
router.get("/removeban",async (req,res)=>{
  req.session.destroy((err)=>{
    if(err) throw err;
    res.send("Ban Removed");
  })
})


// to create user
router.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    username:"mdmonis",
    age:23,
    name:"Monis"
  },{
    username:"muskan",
    age:24,
    name:"Muskan"
  }); 
  res.send(createdUser);
});

//to display all users
router.get("/allusers",async (req,res)=>{
  const allUsers = await userModel.find(); // returns an array
  res.send(allUsers);
})

//to display only one specific user
router.get("/user",async (req,res)=>{
  const allUsers = await userModel.findOne({username:"muskan"});
  // If passed user that dosen't exist, will show null
  res.send(allUsers);
})

// to delete one data 
router.get("/delete",async (req,res)=>{
  const deletedUser = await userModel.findOneAndDelete({
    username:"muskan"
  })
  res.send(deletedUser);
})

module.exports = router;
