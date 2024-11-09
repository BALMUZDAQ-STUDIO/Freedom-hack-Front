import { Link } from "react-router-dom"
import { icons } from "../constants"
import {CustomButton} from "../UI/index"
import { useGlobalContext } from '../lib/context.jsx'
import {logoutUser} from "../lib/api.js"

const Header = () => {
  const {setIsLogin} = useGlobalContext()
  const handleLogout = () => {
    logoutUser();  
    setIsLogin(false); 
    console.log('Пользователь успешно вышел.');
};
  return ( 
    <header className="flex flex-row items-center h-[128px]  border-solid border-b-[5px] border-[#CDCDCD]">
        <img src={icons.logo} className="w-[210px] h-[75px] ml-[48px]"/>
        <div className=" flex text-[20px] font-bold text-main w-[20vw] justify-between ml-[50vw] items-center">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/files">Upload</Link>
            <Link to="/create">Create</Link>
        </div>
        <CustomButton title="Log out" containerStyles="border-red-600 w-[130px] h-[50px] ml-8" textStyles="text-red-600 text-[16px] font-semibold" handlePress={handleLogout}/>
    </header>
  )
}

export default Header