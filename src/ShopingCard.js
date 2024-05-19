import React, { useEffect, useState } from 'react';
import CardInShoppingCart from './CardInShoppingCart';
import './ShopingCard.css';



function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('reactItem');
    if (storedItems) {
      try { 
        let parsedItems = JSON.parse(storedItems);
        parsedItems = parsedItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
        setItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
      }
    }
  }, []);

  useEffect(() => {

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  }, [items]);

  const handleAdd = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  const handleRemove = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  const handleClose = (product) => {
    const updatedItems = items.filter(item => item.id !== product.id);
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  return (
    <div className="cart" id='cardComponent' style={{width:'100vw'}}>
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col"><h4><b className='text-success'>Shopping Cart</b></h4></div>
              <div className="col align-self-center text-right text-muted">{items.length} items</div>
            </div>
          </div>

          {items.map(product => (
            <div key={product.id}>
              <CardInShoppingCart product={product} onAdd={handleAdd} onRemove={handleRemove} onClose={handleClose} />
            </div>
          ))}
          <div className="back-to-shop"><a href="/Products">{"<--"}</a><span className="text-muted">Back to shop</span></div>

        </div>
        <div className="col-md-4 summary">
          <div><h5><b>Summary</b></h5></div>
          <hr />
          <div className='d-flex justify-content-between'>
            <div className="col" style={{ paddingLeft: '0' }}>ITEMS {items.length}</div>
            <div className="col text-right text-danger">€ {totalPrice}</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select><option className="text-muted">Standard-Delivery- €5.00</option></select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div className='d-flex justify-content-between' id='totalPrice'>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right text-danger" >€ {isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)}</div>
          </div>

          <a className="btn" href='/CheckOut'>CHECKOUT</a>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
