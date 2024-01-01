import React, { useState, useshowLogin } from 'react'
import "./App.css"
import Login from './login/Login';
const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  const [showButtons,setShowButtons] = useState(true)
const handleButtonClick = () =>{
  setShowLogin(true)
  setShowButtons(false)
}
const handleLoginClose = () =>{
  setShowLogin(false)
  setShowButtons(true)
}
  return (
    <div className='homePage'>
   {showButtons && (
    <>
      <button onClick={handleButtonClick}>Login</button>
      {/* <button onClick={handleButtonClick}>Manager</button>
     <button onClick={handleButtonClick}>Visitor</button> */}
    </>
   )}
   {showLogin && <Login onClose ={handleLoginClose}/>}
  </div>
  )
}

export default App
