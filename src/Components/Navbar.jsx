import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, actualizarTema } = useContext(ContextGlobal);

  return (
    <nav className={`${state.tema}`}>
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contact">Contacto</Link>
      <NavLink to="/details/:id">Dentista</NavLink>
      <button onClick={actualizarTema}>Cambiar a {state.tema === 'light' ? 'dark' : 'light'}</button>
    </nav>
  );
};

export default Navbar;