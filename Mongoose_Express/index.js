const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const { type } = require('os');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN!');
    })
    .catch(() => {
        console.log('OH NO MONGO CONNECTION ERROR!');
    })

app.get('/products', async (req, res) => {
    const {category} = req.query;
    if (category) {
        const products = await Product.find({category});
        //render是自动去views文件夹里面去找，所以res.render('products/index.ejs', {products})而不是res.render('/products/index.ejs', {products});
        res.render('products/index.ejs', {products, category});
    } else {
        const products = await Product.find({});
        res.render('products/index.ejs', {products, category: 'All'});
    }
    
})

app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', {categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    //要等一会，等save存完再继续往下走
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit.ejs', {product, categories});
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`);
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show.ejs', {product});
})

app.delete('/products/:id', async (req, res) => {
    console.log("hello");
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})





app.listen(3000, () => {
    console.log('Listening on port 3000');
});