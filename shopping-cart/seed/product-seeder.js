var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzkwODcxNV5BMl5BanBnXkFtZTgwNTAwMjE3MzE@._V1_UY268_CR6,0,182,268_AL_.jpg',
        title: 'Famous Five',
        description: 'Adventure Book..!!!!',
        price: 10
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/818PicDErkL.jpg',
        title: 'Harry Potter 1',
        description: 'Novel Book..!!!!',
        price: 20
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL.jpg',
        title: 'Harry Potter 2',
        description: 'Novel Book..!!!!',
        price: 30
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/24/The_Polar_Express_%282004%29_poster.jpg',
        title: 'The Polar Express',
        description: 'Children Adventure Book..!!!!',
        price: 10
    }),

    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51364NhwLoL._AC_UL320_SR212,320_.jpg',
        title: 'The Little Prince',
        description: 'Children Book..!!!!',
        price: 10
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg',
        title: 'The Fault in Our Stars',
        description: 'Teen Novel Book..!!!!',
        price: 40
    }),

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
