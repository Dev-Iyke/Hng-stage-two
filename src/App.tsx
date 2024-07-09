import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Cart from './pages/Cart'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="home-bg">
        
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
