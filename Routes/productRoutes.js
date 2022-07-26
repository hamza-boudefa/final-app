const express=require('express')
const { addNewProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../Controllers/productControllers')
const userMiddleware = require('../middlewares/userMiddleware')
const Router=express.Router()

Router.post('/newProduct',userMiddleware,addNewProduct)

Router.get('/getProducts',getProducts)

Router.get('/getProduct/:id',getProduct)

Router.put('/updateProduct/:id',userMiddleware,updateProduct)

Router.delete('/deleteProduct/:id',userMiddleware,deleteProduct)


module.exports=Router