import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const fetchCarData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php' + params.id);
      const data = await response.json();
      console.log(data);

      setProduct(data)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCarData();
  }, []);
  
  return (
    <div>
      <h1>från Product {params.id}</h1>
      <p>hejsan</p>
    </div>
  )
}

export default Product