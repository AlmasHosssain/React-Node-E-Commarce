const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
   id : {
      type : String
   },
   title : {
     type : String
  },
  img : {
     type : String
  },
  price : {
     type : Number
  },
  company : {
     type : String
  },
  info : {
     type : String
  },
  count : {
     type : Number
  },
  total : {
     type : Number
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product