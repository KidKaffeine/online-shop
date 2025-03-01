const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()


const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')

const app = express()
const port = process.env.PORT

app.set('views', './resources/views' )
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'resources', 'public')))

app.use("/admin", adminRoutes.router)
app.use("/shop", shopRoutes)
app.use("/", (req,res) => {
    res.render('notFound', {title: "Not found"})})

app.listen(port, ()=> {
    console.log(`Running on port ${port}.`)
})
