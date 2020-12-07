const router = require('express').Router()
let { setProduct,getAll,updateProduct,deleteProduct } = require('../controllers/productControler')

router.post('/product', setProduct)
router.get('/product',getAll)
router.delete('/product/:productId',deleteProduct)
router.put('/product/:productId',updateProduct)
module.exports = router