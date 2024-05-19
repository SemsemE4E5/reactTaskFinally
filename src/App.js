import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Navbar from './Navbar';
import OurProducts from './OurProducts';
import OurTeam from './OurTeam';
import ProductDetails from './ProductDetails';
import Products from './Products';
import ShopingCard from './ShopingCard';
import Slider from './Slider';
import CheckOut from './checkout';

export function App() {
  const [products, setProducts] = useState([]);
  const apiUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<> <Navbar/> <Slider /> <OurProducts /> <Contact /> <OurTeam /> <Footer />  </> }
        />
        <Route path="/product/:productId" element={<> <Navbar/> <ProductDetailsWrapper /> </>} />
        <Route path="/Products" element={<> <Navbar/>  <Products products={products} /> </>} />
        <Route path="/OurTeam" element={<> <Navbar/> <OurTeam /> </>} />
        <Route path="/ShopingCard" element={<> <Navbar/> <ShopingCard /> </>} />
        <Route path="/CheckOut" element={<> <Navbar/> <CheckOut /> </>} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

function ProductDetailsWrapper() {
  let { productId } = useParams();
  const handleAddToCart = (product) => {
    console.log("Adding product to cart:", product);
  };

  return <ProductDetails productId={productId} onAddToCart={handleAddToCart} />;
}

