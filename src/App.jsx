import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMyGlobalContext } from './lib/context.jsx';
import {Home, Login, Settings, Files, Profile} from "./pages/index.js"
import { AppContext } from './lib/context.jsx';

const App = () => {
const {isLogin} = false;

    return(
    <Router>
        <AppContext>
            {isLogin ?
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>:
            <Routes>
            <Route path="*" element={<Login/>} />
        </Routes>
            }
        </AppContext>
    </Router>
)};

export default App;