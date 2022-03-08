import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './components/Cart'



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        
    </Routes>
  </BrowserRouter>,
     
      
      
    
      <Footer />
    </div>
  );
}

export default App;