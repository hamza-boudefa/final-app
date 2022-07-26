const express=require('express')
const { addNewUser, getUsers, getUser, updateUser, deleteUser, login } = require('../Controllers/userControllers')
const userMiddleware = require('../middlewares/userMiddleware')
const Router=express.Router()


Router.post('/newUser',addNewUser)

Router.post('/login',login)

Router.get('/getUsersList',getUsers)

Router.get('/getUser/:id',getUser)

Router.put('/getUser/:id',userMiddleware,updateUser)

Router.delete('/getUser/:id',userMiddleware,deleteUser)





module.exports=Router