var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = [
    { id: 1, NameOfCompany: 'Company A', DateOfIncorporation: new Date() },
    { id: 2, NameOfCompany: 'Company B', DateOfIncorporation: new Date() },
  ];

  res.render('admin', {data});
});

module.exports = router;