import {createContext, useContext, useState } from "react";

const GlobalContext = createContext();


export const useMyGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({children}) => {
    const [isLogin, setIsLogin] = useState("qwe");
    
  return (
    <GlobalContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </GlobalContext.Provider>
  )
}
