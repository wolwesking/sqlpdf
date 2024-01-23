var express = require('express');
var router = express.Router();
var {getAllRecords} = require('../service/getLeao_service')
/* GET home page. */

router.get('/', async function(req, res, next) {
  try {
    // Call the function to get all records
    const allRecords = await getAllRecords();

    // Render the 'admin' view with the retrieved data
    res.render('admin', { data: allRecords });
  } catch (error) {
    console.error("Error in route:", error);
    // Handle the error as needed, for example, send an error response
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;