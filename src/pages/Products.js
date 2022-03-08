import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
// import { useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);
  
  const fetchData = async () => {
    try {
        const response = await fetch(' https://codexplained.se/cars.php');
        const data = await response.json();
         console.log(data);
        setProducts(data);
    } catch (error) {


    }

  }
  useEffect(() => {
    fetchData();
  }, []);

 
  
  return (
    <div>
   <h1>Products</h1>
      {
        products.map (product => (
        <article key={product.id} onClick={() => {console.log(product.id)}}>
          <Link to ={`/products/${product.id}`}>
            <p>{product.title} - {product.price} - <img src ={product.url} alt="car"/></p>
            </Link>
        </article>
      ))
    }
  </div>
  
  )

}

export default Products