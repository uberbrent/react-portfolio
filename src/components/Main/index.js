import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume'

function Main() {

    const [categories] = useState([
        'about', 'portfolio', 'contact', 'resume'
      ])
    
      const [currentCategory, setCurrentCategory ] = useState(categories[0]);
    
      console.log(currentCategory)

    const renderPage = () => {
        switch (currentCategory) {
            default:
                return <About />
            case 'portfolio':
                return <Portfolio />
            case 'contact':
                return <Contact />
            case 'resume':
                return <Resume />
        }
    }

    return (
        <main>
            <Nav
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            >
            </Nav>
            {renderPage(currentCategory)}
        </main>
    )
}

export default Main