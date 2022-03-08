import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Product from './pages/Product';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/products/:id" element={<Product />} />
          
        </Routes>
      {/* <Products /> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}
// Code from mikeProduct wont be main, just use route
export default App;