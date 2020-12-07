const TotalCost = require('../modals/Total')

addToTotal =(req,res)=>{
   let {subTotal,Tax,Total} = req.body
   
   let total = new TotalCost({
      subTotal,Tax,Total
   })

   total.save()
         .then((total)=>{
            res.status(201).json({
               message : "Total saved successfully",
               total
            })
         })
         .catch((error)=>{
            res.status(500).json({
               message :"Total submit error occurred",
               error
            })
         })
}

updateTotal =(req,res)=>{
   let {totalId} = req.params
   TotalCost.findOneAndUpdate({_id : totalId},{$set : req.body},{new : true})
            .then((updatedTotal)=>{
               res.status(200).json({
                  message : "Total updated successfully.",
                  updatedTotal
               })
            })
            .catch((error)=>{
               res.status(500).json({
                  message :"Total update error occurred",
                  error
               })
            })
}

deleteTotal=(req,res)=>{
   let {totalId} = req.params
   TotalCost.findByIdAndDelete({_id : totalId})
            .then((result) => {
               res.status(200).json({
                  message: "Total deletion error occurred successfully..",
                  result
               })
            })

         .catch((error) => {
            res.status(500).json({
               message: "Total Deletion error occurred.",
               error
            })
         })
}

getTotal=(req,res)=>{
   TotalCost.find()
            .then((result) => {
               res.status(200).json({
                  message: "Total get error occurred successfully..",
                  result
               })
            })
            .catch((error)=>{
               res.status(500).json({
                  message: "Total get error occurred.",
                  error
               })
            })
}

module.exports = {
   addToTotal,
   updateTotal,
   deleteTotal,
   getTotal
}
