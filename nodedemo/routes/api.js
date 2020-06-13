const path = require('path');
const express = require('express');
const ProductController = require('../controllers/Product');
const router = express.Router();

router.get('/products', ProductController.getProducts);

module.exports = router;
