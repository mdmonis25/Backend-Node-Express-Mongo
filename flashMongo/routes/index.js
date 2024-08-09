var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');  
});

router.get('/failed',(req,res)=>{
  req.flash("age",12);
  req.flash("name","Monis");
  res.send("Flash Created");
})

router.get('/check',(req,res)=>{
  res.send("Check Now");
  console.log(req.flash("age"), req.flash("name"));   
})


module.exports = router;
