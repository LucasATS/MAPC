import { HashRouter, Route, Routes, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Home from './pages/Home.js';
import React from 'react';
import './index.css';
import PrevisaoDetalhada from './components/PrevisaoDetalhada';

const ParametroPrevisaoDetalhada = () => {
    let { cidade } = useParams();

    return (<PrevisaoDetalhada nome={cidade} />);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<Nav />} >
                <Route index element={<Home />} />
                <Route path="/:cidade" element={<ParametroPrevisaoDetalhada />} />
            </Route>
        </Routes>
    </HashRouter>
);
