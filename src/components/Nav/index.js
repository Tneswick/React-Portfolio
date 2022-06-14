import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <nav className='d-grid nav-grid'>
      <div />

      <a href="#about" 
        onClick={() => handlePageChange('about')} 
        className={currentPage === 'about' ? 'active-nav' : ''}>
        About</a>

      <a href="#portfolio"
        onClick={() => handlePageChange('portfolio')} 
        className={currentPage === 'portfolio' ? 'active-nav' : ''}>
        Portfolio</a>
        
      <a href="#contact"
        onClick={() => handlePageChange('contact')} 
        className={currentPage === 'contact' ? 'active-nav' : ''}>
        Contact</a>

      <a href="#resume"
        onClick={() => handlePageChange('resume')} 
        className={currentPage === 'resume' ? 'active-nav' : ''}>
        Resume</a>

      <div />
    </nav>
  )
}

export default Nav;