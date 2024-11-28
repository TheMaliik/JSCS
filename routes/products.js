var express = require('express');
var router = express.Router();
const fs = require('fs');


router.get('/details', function(req, res, next) {


  fs.readFile('public/products.json', 'utf8', (err, data) => {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
   
  });
});



router.get('/details/:id', function(req, res, next) {
    fs.readFile('public/products.json', 'utf8', (err, data) => {
  
      
        const products = JSON.parse(data);
        const product = products[req.params.id];
  
      
          res.json(product);
        
      
    });
  });



  

  router.get('/details/:id/:qt', (req, res) => {
    fs.readFile('public/products.json', 'utf8', (err, data) => {
    

       
            const products = JSON.parse(data);
            const productId = req.params.id;
            const quantity = parseInt(req.params.qt);

            const product = products[productId];


            const totalPrice = product.price * quantity;
            res.send(`Le prix total pour ${quantity} ${product.name} est de ${totalPrice} DT`);
        
    });
});






router.get('/Compare/instock/:qt', (req, res) => {
    fs.readFile('public/products.json', 'utf8', (err, data) => {
     

            const products = JSON.parse(data);
            const quantity = parseInt(req.params.qt);

            const productsInStock = Object.values(products).filter(product => product.stock >= quantity);

          
                res.json(productsInStock);
            
       
    });
});

module.exports=router;