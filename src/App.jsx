import './App.css';
import { Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {

  return (
    <>
      <div className="app">
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
