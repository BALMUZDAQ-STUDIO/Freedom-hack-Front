import { Link } from "react-router-dom"
import { icons } from "../constants"


const Header = () => {

  return ( 
    <header className="flex flex-row items-center h-[128px]  border-solid border-b-[5px] border-[#CDCDCD]">
        <img src={icons.logo} className="w-[210px] h-[75px] ml-[48px]"/>
        <div className=" flex text-[20px] font-bold text-main w-[33vw] justify-between ml-[40vw] items-center">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/files">Upload</Link>
            <Link to="/settings">Settings</Link>
        </div>
    </header>
  )
}

export default Header