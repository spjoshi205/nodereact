const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(rows => {
    	console.log(rows);
		res.status(200).send({ success:true, products: rows });
    })
    .catch(err => {
      console.log(err);
    });
  }