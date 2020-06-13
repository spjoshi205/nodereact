const path = require('path');

const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();

app.use(cors());

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.use('/',(req, res, next) => {
	res.status(404).send({ status: false, message: "Invalid request" });
});

mongoose.connect('mongodb://127.0.0.1:27017/react_node')
.then(()=>{
    Product.findOne()
    .then(productDetail => {
        if(!productDetail){
            var books = [
                            { title: 'Mongoose Tutorial', price: 10, description: 'Mongoose Tutorial',imageUrl:'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png' },
                            { title: 'NodeJS tutorial', price: 15, description: 'NodeJS tutorial',imageUrl:'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png' },
                            { title: 'MongoDB Tutorial', price: 20, description: 'MongoDB Tutorial',imageUrl:'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png' }
                        ];
            Product.collection.insert(books, function (err, docs) {
              if (err){ 
                  return console.error(err);
              } else {
                console.log("Multiple documents inserted to Collection");
              }
            });
        }
    });
    app.listen(3000)
})
.catch(err => console.log(err));
