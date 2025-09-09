// components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="containerHead">
        <div className="logo">NaturaSkinCare</div>
        <div className='opciones'>
          <h2>Inicio</h2>
          <h2>Nosotros</h2>
          <h2>Productos</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;