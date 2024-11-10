import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './lib/context.jsx';
import {Home, Login, Settings, Profile, Upload, Create, Candidates, Favorites} from "./pages/index.js"


const App = () => {
    return(
        <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path ="/create" element={<Create/>} />
                <Route path="/upload" element={<Upload/>} />
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/vacancy/:id" element={<Candidates/>}/>
                <Route path="/favorites" element={<Favorites/>} />
                <Route path="*" element={<div className='text-3xl'>Not Found</div>}/>
            </Routes>
)};

export default App;