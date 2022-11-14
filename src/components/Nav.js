import './Nav.css';
import { React } from "react"
import { Outlet, Link } from "react-router-dom";

function Nav() {

  return (
    <div>
      <nav className='nav-Painel neumorphism row'>
        <Link className='nav-a' to="/">🏠 Home</Link>
        <input className='nav-pesquisar' placeholder='Pesquise por cidade...' type='text' ></input>
        <Link className='nav-a' to="/TESTE">🔍</Link>
      </nav>
      <Outlet />

    </div>

  );
}

export default Nav;
