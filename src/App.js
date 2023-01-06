
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/home';
import Fordele from './pages/fordele';
import Funktioner from './pages/funktioner';
import VrPlatform from './pages/vrPlatform';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import About from './pages/about';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/fordele' element={<Fordele />}/>
      <Route path='/funktioner' element={<Funktioner />}/>
      <Route path='/vrPlatform' element={<VrPlatform />}/>
      <Route path='/gallery' element={<Gallery />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
