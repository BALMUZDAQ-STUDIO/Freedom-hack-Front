import React, { useState } from 'react'
import {icons} from "../constants/index.js"
import { useGlobalContext } from '../lib/context.jsx'



function Login() {
  const {setIsLogin} = useGlobalContext();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const handlePress = () =>{
    
    setIsLogin(true);
  }

  return (
    <div className=''>
      <img src={icons.logo}/>
    </div>
  )
}

export default Login