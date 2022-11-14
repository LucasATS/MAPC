import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Home from './pages/Home.js';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<Nav />}>
                <Route index element={<Home />}/>
                {/* <Route path="*" element={<Home />} /> PÁG DE ERRO #404 */}
            </Route>
        </Routes>
    </HashRouter>
);
