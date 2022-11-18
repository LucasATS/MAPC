import './Nav.css';
import { React, useState } from "react"
import { Outlet, Link } from "react-router-dom";

function Nav() {

  const [barraPesquisa, setBarraPesquisa] = useState('');

  return (
    <div>
      <nav className='nav-Painel-nav neumorphism row transition'>
        <Link className='nav-a' to="/">🏠 Home</Link>
        <input onChange={(evnt) => { setBarraPesquisa(evnt.target.value) }} className='nav-pesquisar' placeholder='Pesquise uma cidade...' type='text' ></input>
        <Link className='nav-a' to={`/${barraPesquisa}`}>🔍 Pesqusar</Link>
      </nav>

      <Outlet />

      <h4 className='nav-Painel-titulo neumorphism'><span style={{ color: '#e89b00' }}>MAPC</span>: MEIO AUTÔMATICO DE PREVER O CLIMA</h4>
    </div >

  );
}

export default Nav;
