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
        title="Grow your skills, define your future"
        subtitle="Presenting Academy on the first standard of the Future. We work you that app is full in the playground for tomorrow."
        buttonText="LEARN MORE"
      />
    </div>
  );
}

export default App;