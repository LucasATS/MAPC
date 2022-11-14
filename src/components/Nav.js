import './Nav.css';
import { React } from "react"
import { Outlet, Link } from "react-router-dom";

function Nav() {

  return (
    <div>
      <nav className='nav-Painel glass row'>
        <Link className='nav-a' to="/">🏠 Home</Link>
        <Link className='nav-a' to="/TESTE">🔍 Pesquisar</Link>
      </nav>
      <Outlet />

    </div>

  );
}

export default Nav;
