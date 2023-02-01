var express = require('express');
const axios = require('axios');
var router = express.Router();

const Sequelize = require('sequelize');
const Customer = require('../models').customer;

//se obtienen todos los clientes de la base de datos
router.get('/findAll/json', function(req, res, next) {  

	
    Customer.findAll({
        attributes: { exclude: ["id", "createdAt", "updatedAt"] }  
    })  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

  //se obtienen las ventas de un ID y que tenga el attrib shipped
  router.get('/shipped/:customerNumber', async function(req,res,next){

    let number = req.params.customerNumber
    const URL = `https://proyecto04-2-default-rtdb.firebaseio.com/Collection.json?orderBy="customerNumber"&equalTo=${number}`
    const response = await axios.get(URL)
    var values = Object.values(response.data)
    let filtered = values.filter(i => i.status == "Shipped")

    res.json(filtered);
});

//se obtienen todas las ventas
router.get('/sales', async function(req, res, next){
    let url = "https://proyecto04-2-default-rtdb.firebaseio.com/Collection.json"
    const response = await axios.get(url)
    res.json(response.data);

})

//operación post que recibe un arreglo de elementos y retorna su precio total.
router.post('/total', async function(req, res, next){
    let products = req.body
    let total = 0
    
    Object.entries(products).forEach((entry) => {
        const [key, value] = entry;
        
        let quantity = products[key]["quantityOrdered"]
        let price = products[key]["priceEach"]
        total += (quantity * price)

    })
    total = total.toFixed(2)
    total = parseFloat(total)

    res.json({total: total})
})

module.exports = router;