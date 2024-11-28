var express = require('express');
var router = express.Router();
var os = require ('os');

router.get('/details', function(req, res, next) {
    res.json({
        hostname:os.hostname(),
        type:os.type(),
        platform:os.platform(),
        });
  });



  router.get('/cpus', function(req, res, next) {
    res.json({
      os:  os.cpus()
        });
  });




  router.get('/cpus/:id', function(req, res, next) {
    res.json({
        os:  os.cpus()[req.params.id]
    
        });
  });


module.exports = router;
