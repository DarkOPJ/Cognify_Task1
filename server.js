const express = require('express')
const ejs = require('ejs');
const {friendsRouter} = require('./routes/friends.router')
const {countriesRouter} = require('./routes/countries.router')
const {productRouter} = require('./routes/products.router')
const {reviewsRouter} = require('./routes/reviews.router')
const {products} = require('./models/products.models')

const PORT = 3000

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())

app.use(express.static('public'))

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(req.method + " " + req.baseUrl + " " + delta +"ms")
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Task 1',
        products
    })
})


// Friends
app.use('/friends', friendsRouter)

// Countries
app.use('/countries', countriesRouter)

// Products
app.use('/products', productRouter)

// Reviews
app.use('/reviews', reviewsRouter)

app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})