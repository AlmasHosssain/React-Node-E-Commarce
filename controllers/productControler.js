const Product = require('../modals/Product')

setProduct=(req,res)=>{
   let {title,img,price,company,info} = req.body

      let product = new Product({
         title,img,price,company,info
      })

      product.save()
            .then((product)=>{
               res.status(201).json({
                  message : "Get product information",
                  product
                 })
            })

            .catch((error)=>{
               res.status(500).json({
                  message : "Get all user error occurred",
                  error
               })
            })

}

 getAll=(req,res)=>{
   Product.find()
         .then((response)=>{
            if (response.length == 0) {
               res.status(200).json({
                  message : "No product found"
               })
            }else{
               res.status(200).json({
                  message : "The available data are",
                  response
               })
            }
         })
         .catch((error)=>{
            res.status(500).json({
               message : "Product post error occurred.",
               error
            })
         })
}

deleteProduct = (req, res) => {
   let {productName} = req.params
   Product.findOneAndDelete({ name: productName })
      .then((result) => {
         res.status(200).json({
            message: "Product deletion error occurred successfully..",
            ...result._doc
         })
      })
   
      .catch((error) => {
         res.status(500).json({
            message: "Product Deletion error occurred.",
            error
         })
      })
}

updateProduct =(req,res)=>{
   let {productName} = req.params
   Product.findOneAndUpdate({name : productName},{$set : req.body},{new : true})
            .then((response)=>{
               res.status(200).json({
                  message : "The updated data is",
                  response
               })
            })
            .catch((error)=>{
               res.status(500).json({
                  message: "Product Deletion error occurred.",
                  error
               })
            })
}


module.exports = {
   setProduct,
   getAll,
   deleteProduct,
   updateProduct
}