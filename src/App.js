import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
    </Routes>
  </BrowserRouter>,
      <Cart />
      
      
      Webshop in React
      <Footer />
    </div>
  );
}

export default App;

