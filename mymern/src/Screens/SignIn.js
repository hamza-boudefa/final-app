import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { addNewUser } from '../Redux/Actions/userActions'

function SignIn() {

  const [cred, setCred] = useState({})
  
const dispatch=useDispatch()

const handleSignIn=()=>{
  dispatch(addNewUser(cred))
}

const {loading,message,error}=useSelector(state=>state.addNewUser)


  return( 
        <div>
            <Header/> 
            {loading && 'loading'}
            {message && <p>{message.message}</p>}
           <h1>Signin</h1>
            <div style={{display:'flex',flexDirection:'column',width:300,alignItems:'center'}}>
            <label>user name</label>
                <input type='text' onChange={(e)=>setCred({...cred,name:e.target.value})} />
                <label>user email</label>
                <input type='text' onChange={(e)=>setCred({...cred,email:e.target.value})}/>
                <label>Password</label>
                <input type='password' onChange={(e)=>setCred({...cred,password:e.target.value})} />
                <button onClick={handleSignIn} >Sign UP</button>
            </div>
            {error && <p>{error}</p>}
          
        </div>
  )
}

export default SignIn
