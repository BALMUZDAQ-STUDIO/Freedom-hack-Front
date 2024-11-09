import React, { useState } from 'react'
import {icons} from "../constants/index.js"
import { useGlobalContext } from '../lib/context.jsx'



function Login() {
  const {setIsLogin} = useGlobalContext();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handlePress = () =>{
    
    setIsLogin(true);
  }

  return (
    <div>
        <div>
          <img src={icons.logo} className="w-[240px] h-auto mt-[40px] ml-[64px]"/>
        </div>

        <div className='mt-[100px] justify-center text-center w-[600px] ml-auto mr-auto'>
          <h2 className="text-center text-[64px] font-bold mb-[25px]">Log in</h2>
          <h3 className="block text-black-700 font-semibold mb-[10px] text-[24px] text-left ml-[35px]">Email</h3>
          <input type="text" placeholder='Type your email address...' className='font-bold w-[550px] h-[64px] rounded-[40px] pl-[18px] pt-[22px] pb-[22px] bg-[#f2f2f2]'/>
          <h3 className="block text-black-700 font-semibold mb-[10px] text-[24px] text-left ml-[35px] mt-[30px]">Password</h3>
          <div className='flex ml-[20px]'>
            <input type= {isPasswordVisible ? 'text' : 'password'} placeholder='Type your email password...' className='font-bold w-[550px] h-[64px] rounded-[40px] pl-[18px] pt-[22px] pb-[22px] bg-[#f2f2f2]'/>
            <button onClick={togglePasswordVisibility} className='ml-[15px]'>
              <img
                src={isPasswordVisible ? icons.eyeOpen : icons.eyeClose}
                width="24px"
                height="24px"
              />
            </button>
          </div>
          <a href="#" className='text-right text-[#CDCDCD] hover:text-black active:text-black text-[17px] transition easy-linear font-bold'>Forgot password?</a>
          <CustomButton title = "Log in" containerStyles='mt-[25px]'/>
        </div>
      </div>
  )
}

export default Login