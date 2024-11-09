import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './lib/context.jsx';
import {Home, Login, Settings, Files, Profile} from "./pages/index.js"


const App = () => {
const {isLogin} = useGlobalContext();

    return(

        <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/files" element={<Files/>} />
                <Route path="/profile/:id" element={<Profile/>} />
                <Route path="*" element={<div className='text-3xl'>Not Found</div>}/>
            </Routes>
)};

export default App;