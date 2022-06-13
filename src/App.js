import './App.css';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact';

function App() {
  return (
    <>
      <header>
        <div className='d-grid header-grid'>
          <a href='/'>Tneswick</a>
          <Nav />
        </div>
      </header>
      <main>
        {/* <About /> */}
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer/>
      {/* PUSH FOOTER TO BOTTOM OF Viewport */}
    </>
  );
}

export default App;
