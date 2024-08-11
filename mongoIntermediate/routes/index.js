var express = require("express");
var router = express.Router();
var userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/created", async (req, res) => {
  const createdUser = await userModel.create(
    {
      username: "Monis",
      nickname: "mon",
      description: "junior software developer",
      categories: ["react", "native", "node"],
    },
    {
      username: "Tabish",
      nickname: "tummu",
      description: "class 1 student with high iq",
      categories: ["arbi", "urdu", "hindi"],
    },
    {
      username: "Danish",
      nickname: "danu",
      description: "kg1 student with high intellact",
      categories: ["english", "maths", "taunt"],
    }
  );
});
router.get('/allusers',async (req,res)=>{
  res.send(await userModel.find());
});

//searching case insensetive
router.get("/find", async (req,res)=>{
  // to find names containing monis
  let regex = RegExp("monis",'i');
  // to find exactly monis
  let regex1 = RegExp("^monis$",'i');
  let user = await userModel.find({username:regex});
  res.send(user);
})

// searching in an array
router.get("/findArray", async (req,res)=>{

  let user = await userModel.find({categories :{$all : ["react"]}});
  res.send(user);
})
module.exports = router;
