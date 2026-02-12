import Hero from './components/Hero';
import Featured from './components/Featured';
import MoodBoard from './components/MoodBoard';
import About from './components/About';
import EditorialFooter from './components/EditorialFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Featured />
      <MoodBoard />
      <About />
      <EditorialFooter />
    </div>
  );
}

export default App
