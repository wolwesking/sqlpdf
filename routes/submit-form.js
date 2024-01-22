var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Success", 200);
});

router.post('/', (req,res,next)=>{

    const formData = req.body;
    const jsonData = JSON.stringify(formData, null, 2);

  
    console.log("Data recieved: ", jsonData);
  
  
    res.send('Form submited successfully');
  
  });

module.exports = router;
