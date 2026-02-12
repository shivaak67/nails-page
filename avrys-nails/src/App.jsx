import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Featured from './components/Featured';
import MoodBoard from './components/MoodBoard';
import About from './components/About';
import EditorialFooter from './components/EditorialFooter';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Featured />
      <MoodBoard />
      <About />
      <EditorialFooter />
    </div>
  );
}

export default App
