import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import './App.css';

function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact me' },
    { name: 'resume' }
  ])

  const [currentCategory, setCurrentCategory ] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      >  
      </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
