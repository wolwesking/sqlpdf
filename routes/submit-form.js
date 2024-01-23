var express = require('express');
var router = express.Router();
var uploadLeao = require('../service/uploadLeao_service')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Success", 200);
});

router.post('/', async (req, res, next) => {
  const formData = req.body;
  const jsonData = JSON.stringify(formData, null, 2);
  await uploadLeao.uploadDocumentLeao(jsonData); // use await since the function is asynchronous

  res.send('Form submitted successfully');
});

module.exports = router;
