import * as React from "react";
import './CardInShoppingCart.css';
export default function CardInShoppingCart({ product, onAdd, onRemove, onClose }) {
    return (
      <div className="
       border-top border-bottom
        d-flex align-items-center
        ">
        <div className="row main d-flex" style={{flexDirection:'row'}}>
          <div className="col-2">
            <img className="img-fluid" src={product.images[0]} alt={product.title} />
          </div>
          <div className="col">
            <div className="text-dark">{product.title}</div>
          </div>
          <div className="col d-flex" id="btn-groub">
            <button className='text-dark' aria-label="Remove one item" onClick={() => onRemove(product)}>-</button>
            <button className="border text-danger text-bold" >{product.quantity}</button>
            <button className='text-dark' aria-label="Add one item" onClick={() => onAdd(product)}>+</button>
          </div>
          <div className="col text-danger">{product.price * product.quantity} &euro;</div>
          <span className="close p-1 text-dark" style={{ width:'50px' ,cursor: 'pointer' }} onClick={() => onClose(product)}>&#10005;</span>
        </div>
      </div>
    );
  }