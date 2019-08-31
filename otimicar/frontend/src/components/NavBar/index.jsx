import React from 'react';
import './style.css';

function Navbar() {
  return(
    <div className="navbar">
      <a href="#" className="logo">OtimicarChallenge</a>
      <ul className="itens-nav">
        <li><a href="#" className="text-itens-nav">Inicio</a></li>
        <li><a href="#" className="text-itens-nav">Cadastro</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
