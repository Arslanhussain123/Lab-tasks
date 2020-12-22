  
  var express = require('express');
var router = express.Router();

router.get('/Home', function(req, res){
   res.send('This is Home page.');
});

module.exports = router;