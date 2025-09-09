// components/Hero.js
import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = ({ title, subtitle, buttonText }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className='buttonCont'>
          <Button text={buttonText} variant={"primary"}/>
          <Button text={buttonText} variant={"secondary"}/>
        </div>
      </div>
      <div className='container2'>
        <img src='/Presentacion.png' alt='Imagen de productos de skincare' />  
      </div>
    </section>
  );
};

export default Hero;