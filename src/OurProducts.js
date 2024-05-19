import React, { useEffect, useState } from "react";
import './OurProducts.css';
import ProductCard from "./ProductCard"; // Assuming you have a ProductCard component

export default function OurProducts() {
    const [products, setProducts] = useState([]);
    const apiUrl = 'https://dummyjson.com/products';
  
    useEffect(() => {
      const fetchProducts = async () => {
        
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data.products);
     
      };
  
      fetchProducts();
    }, []);
    return (
        <>
            <section className="container-fluid row" id="Courses">
                <div className="desc">
                    <p>Find a Product</p>
                    <h2>Featured Products</h2>
                    <div className="separator"></div>
                </div>

                <div className="cardDiv">
                    { products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            img={product.images[0]} 
                            title={product.title}
                            category={product.category}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
