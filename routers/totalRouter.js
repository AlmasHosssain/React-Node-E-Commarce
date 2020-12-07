const router = require('express').Router()
let { addToTotal,getTotal,updateTotal,deleteTotal } = require('../controllers/totalController')

router.post('/total',addToTotal)
router.get('/total',getTotal)
router.put('/total/:totalId',updateTotal)
router.delete('total/:totalId',deleteTotal)

module.exports = router