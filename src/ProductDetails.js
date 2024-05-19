import React, { useEffect, useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ productId }) => {

  let selectedItem
  if(localStorage.reactItem!=null){selectedItem=JSON.parse(localStorage.reactItem)}
  else{selectedItem=[];}

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
      
        const productData = await response.json();
        setProduct(productData);
      
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
   const handleAddToCart = (product) => {

    alert('Product Added Successfully')

    let flag = false;
    selectedItem.forEach(element => {
       if(product.id === element.id) {
          flag = true
       }
    });

    if(flag)
      alert("This product is already in your cart")
    
    else
    selectedItem.push(product)
    localStorage.reactItem = JSON.stringify(selectedItem);
  };
  
  return (
    <div className="card">
    <div className="card__title">
      <div className="icon">
        <a href="/"><i class="fa fa-arrow-left" style={{fontSize:'50px'}}> {'↼'}</i></a>
      </div>
      <h3>{product.title}</h3>
    </div>
    <div className="card__body">
      <div className="half">
        <div className="featured_text">
          <h2>{product.category}</h2>
          <p className="sub">{product.title}</p>
          <p className="price">{product.price}&euro;</p>
        </div>
        <div className="image">
          <img src={product.images[0]} alt="" />
        </div>
      </div>
      <div className="half">
        <div className="description">
          <p>{product.description}</p>
        </div>
        <span className="stock text-bolder" style={{fontSize:'25px'}} ><i class="fa fa-pen"></i> In stock</span>
        <div className="reviews">

          <span style={{transform:'translateY(100px)'}}> ★ {product.rating} </span>
          <div className=' d-flex justify-content-between align-items-center' style={{width:"100%",height:'200px',marginTop:'20px'}}>
             {
              product.images.map(ele=>{
                return(
                  <img src={ele} alt='...' style={{width:'100px',height:'100px'}}/>
                )
              })
             }
          </div>
        </div>
      </div>
    </div>
    <div className="card__footer">
      <div className="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div className="action">
           <button className="add-to-cart-btn d-flex justify-content-center align-items-center mt-5" style={{ width:'170px'}} onClick={() => handleAddToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
