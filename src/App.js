import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [ currentPage, setCurrentPage ] = useState('about');

  const renderPage = () => {
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <Resume />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='page-container'>
      <header>
        <div className='d-grid header-grid'>
        <h1><a href='/'>Tneswick</a></h1>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <main>
        <div className='main-wrap'>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
