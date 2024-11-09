import {createContext, useContext, useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

const GlobalContext = createContext();



export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({children}) => {
  const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
      if (!isLogin) {
          navigate('/login');
      }else if( window.location.pathname === '/login'){
        navigate('/')
      }
  }, [isLogin, navigate]);
    
  return (
    <GlobalContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </GlobalContext.Provider>
  )
}
