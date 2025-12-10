import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'


const LoginPopUp = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title"> 
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
         </div>
        <div className="login-popup-input"> 
          
            {currentState==="Login"?<></>: <input type="text" placeholder='your name' required/>}
           
            <input type="email" placeholder='your email' required />
            <input type ="password" placeholder='enter password' required></input>
        </div>
        <button>{currentState==="Sign Up"?"create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing , i agree to terms and condition</p>
        </div>
        {currentState==="Login"?  <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
          <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
      
      
      </form>
    </div>
  )
}

export default LoginPopUp
