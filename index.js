const express = require('express')
const adminRoutes = require('./routes/adminRoutes')

const app = express()
const PORT = 8000

app.use("/admin", adminRoutes)


app.listen(PORT, ()=> {
    console.log(`Running on port ${PORT}.`)
})
