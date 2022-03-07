import React, {useState, useEffect} from 'react'

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
        <article>
          <p>{product.title}</p>
        </article>
      ))
    }
  </div>
  )

    
}

export default Products