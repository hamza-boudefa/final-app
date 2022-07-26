import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import { addNewProduct, deleteProduct } from '../Redux/Actions/productAction'
import { getUserDetails } from '../Redux/Actions/userActions'

function Profile() {

let {id}=useParams() 


console.log(id)
const dispatch=useDispatch() 

useEffect(()=>{
    dispatch(getUserDetails(id))
},[dispatch]) 

const {userDetails}=useSelector(state=>state.getUserDetails)

// add new prod
const [newProduct, setNewProduct] = useState({})
const handleAdd=()=>{
    dispatch(addNewProduct({...newProduct,id}))
}

    return (
        <div>
            <Header/>
            <h1>Profile details</h1>
                {userDetails && userDetails.user? <span>Email : {userDetails.user.email} <br/> name :  {userDetails.user.name} </span> : null}
            <h1>My products</h1>
           {userDetails && userDetails.user.listOfProducts.map((el)=><><h3>Product name: {el.productName} </h3><h3>quantity: {el.Quantity} </h3> <button type='submit' onClick={()=>dispatch(deleteProduct(el._id))} >delete</button></>) }
           
            
            <h1>Add new product</h1>
            <div>product name</div>
                <input type='text'  onChange={(e)=>setNewProduct({...newProduct,productName:e.target.value})}  />
            <div>product quantity</div>
                <input type='number'  onChange={(e)=>setNewProduct({...newProduct,Quantity:e.target.value})}   />
                <div>
                    <button onClick={handleAdd} >add new product </button>
                </div>
        </div>
    )
}

export default Profile
