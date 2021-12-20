const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/product')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)

router.route('/product/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)

router.route('/product/deliveryboytoaccept').get(auth,productCtrl.deliveryboytoaccept) 
router.route('/product/deliveryboytoaccept/:id').patch(auth,productCtrl.updatedeliveryaccepted)
router.route('/product/deliveryboytobepicked').get(auth,productCtrl.deliveryboytopicked)
router.route('/product/pickedStatus/:id').patch(auth,productCtrl.updatepickedStatus)  
router.route('/product/deliveryboytobedelivered').get(auth,productCtrl.deliveryboytobedelivered)  
router.route('/product/deliveredStatus/:id').patch(auth,productCtrl.updatedeliveredStatus)   
router.route('/product/deliveryboydelivered').get(auth,productCtrl. deliveryboydelivered) 




module.exports = router