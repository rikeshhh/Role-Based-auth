import React, { useState } from 'react'
import './Login.css'
import Dashboard from '../Dashboard/Dashboard';
const Login = (props) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')
    const [isLoginSuccesful,setLoginSuccessful] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleLogin = (username,password,e,role) =>{
        e.preventDefault();
if (username === 'admin' && password === 'admin') {
    setUserData({username,role})
    console.log("login successful")
    setLoginSuccessful(true)
}else{
    alert('login Unsuccesful')
    setLoginSuccessful(false)
}
    }


    const handleLogout = ()=>{
        setLoginSuccessful(false)
    }
  return (
  <>
  {isLoginSuccesful?(<Dashboard userData={userData} onLogOut={handleLogout}/>):(
      <form className='login'>
      <input
       type="text"
        name="username"
        value={username}
         onChange={(e)=>setUsername(e.target.value)}
          />
             <input
       type="text"
        name="password"
        value={password}
         onChange={(e)=>setPassword(e.target.value)}
          />
           <input
       type="text"
        name="role"
        value={role}
         onChange={(e)=>setRole(e.target.value)}
          />
<button onClick={(e)=>handleLogin(username,password,e,role)}>Login</button>
<button onClick={props.onClose}>Close</button>
  </form>
  )}
  </>
  )
}

export default Login