const mongoose = require('mongoose')
const Schema = mongoose.Schema

const totalSchema = new Schema({
   subTotal : {
      type : Number
   },
   Tax : {
      type : Number
   },
   Total : {
      type : Number
   }
})

const TotalCost = mongoose.model('TotalCost', totalSchema)
module.exports = TotalCost