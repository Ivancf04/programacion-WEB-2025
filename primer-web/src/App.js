// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero 
        title="NaturaSkinCare"
        subtitle="Productos skincare elaborados con ingredientes 100% naturales y orgánicos."
        buttonText="Ver más"
      />
    </div>
  );
}

export default App;