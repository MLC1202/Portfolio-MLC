import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':     return <Home setPage={setActivePage} />;
      case 'about':    return <About />;
      case 'projects': return <Projects />;
      case 'contact':  return <Contact />;
      default:         return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}
