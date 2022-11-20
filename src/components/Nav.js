import { Outlet, Link } from "react-router-dom";
import { React, useState } from "react"
import './Nav.css';

function Nav() {
  const [barraPesquisa, setBarraPesquisa] = useState('');

  return (
    <div>
      <nav className='nav-Painel-nav center row transition'>

        <Link className='nav-a transition' to="/">🏠 Home</Link>
        <input className='nav-pesquisar transition' onChange={(evnt) => { setBarraPesquisa(evnt.target.value) }}
          placeholder='Pesquise uma cidade...' type='text' ></input>
        <Link className='nav-a transition' to={`/${barraPesquisa}`}>🔍 Pesqusar</Link>

      </nav>

      <Outlet />

      <h4 className='nav-Painel-titulo transition'><span style={{ color: '#e89b00' }}>MAPC</span>: MEIO AUTÔMATICO DE PREVER O CLIMA</h4>

    </div >

  );
}

export default Nav;