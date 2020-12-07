const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const app = express()
const productRoute = require('./routers/productRoute')
const totalRoute = require('./routers/totalRouter')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
   extended: true
}))
app.use(bodyParser.json())

app.use('/api/info',productRoute)
app.use('/api/getTotal',totalRoute)

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
   console.log(`Server is ready to run on the port ${PORT}`);
   mongoose.connect('mongodb://localhost/productDB', {
      useNewUrlParser: true
   }, () => {
      console.log(`Database is connected successfully`)
   })
})