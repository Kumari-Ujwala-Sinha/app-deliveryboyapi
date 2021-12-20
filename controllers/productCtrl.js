const Product = require('../models/productModel')

const productCtrl = {
    getProducts: async(req, res) =>{
        try {
            const products = await Product.find()
            res.json(products)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getProductbyUsers:async(req, res)=>{
        try {
           
            const product = await Product.find({deliveryboy:req.user.id})

            res.json(product)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async (req, res) =>{
        try {
            const {deliveryitem, addresstodeli, deliveryboy ,category, deliveryType,image } = req.body;
            const newProduct = new Product({deliveryitem, addresstodeli, deliveryboy ,category,deliveryType, image })
            await newProduct.save()
            res.json({msg: "Created a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async(req, res) =>{
        try {    
            await Product.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req, res) =>{
        try {
            const {deliveryitem, addresstodeli, deliveryboy ,deliveryType, deliveryaccepted} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {deliveryaccepted,deliveryitem, addresstodeli, deliveryboy ,deliveryType})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
       
    },
    updatepickedStatus:async(req, res) =>{
        try {
            const {pickedStatus} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {pickedStatus})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatedeliveredStatus:async(req, res) =>{
        try {
            const {deliveredStatus} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {deliveredStatus})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updatedeliveryaccepted:async(req, res) =>{
        try {
            const {deliveryaccepted} = req.body;
            await Product.findOneAndUpdate({_id: req.params.id}, {deliveryaccepted})

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deliveryboydelivered:async(req,res)=>{
        try {
            
          const deliveredProducts=  await Product.find({deliveryboy: req.user.id,deliveryaccepted:"acceptd", deliveredStatus:true, pickedStatus:true})

            res.json(deliveredProducts)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deliveryboytobedelivered:async(req,res)=>{
        try {
            
            const deliveredProducts=  await Product.find({deliveryboy: req.user.id,deliveryaccepted:"accepted", deliveredStatus:false,pickedStatus:true})

            res.json(deliveredProducts)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deliveryboytoaccept:async(req,res)=>{
        try {
            
            const deliveryboytoaccept=  await Product.find({deliveryboy: req.user.id,deliveryaccepted:"toaccept",pickedStatus:false, deliveredStatus:false})

            res.json(deliveryboytoaccept)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deliveryboytopicked:async(req,res)=>{
        try {
            
            const deliveryboytoaccept=  await Product.find({deliveryboy: req.user.id,deliveryaccepted:"accepted",pickedStatus:false, deliveredStatus:false})

            res.json(deliveryboytoaccept)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   


}


module.exports = productCtrl