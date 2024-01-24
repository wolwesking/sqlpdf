var express = require('express');
var router = express.Router();
var uploadLeao = require('../service/uploadLeao_service')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('leao');
});

router.post('/', async (req, res, next) => {

  // Getting body
  const formData = req.body;

  // Body -> Json
  const jsonData = JSON.stringify(formData, null, 2);

  // TODO remove
  console.log(jsonData);

  // Upload to database
  await uploadLeao.uploadDocumentLeao(jsonData); 

  // TODO normal submited page
  res.send('Form submitted successfully');
});

module.exports = router;

