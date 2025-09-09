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
        <Button text={buttonText} />
      </div>
    </section>
  );
};

export default Hero;