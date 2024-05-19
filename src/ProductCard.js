import * as React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, img, title, description , category , price }) {
    return (
      <div className="col-md-3 m-2">
      <div className="wsk-cp-product">
      <div className="wsk-cp-img mx-auto">
        <img src={img} alt="Product" className="img-responsive" />
      </div>
      <div className="wsk-cp-text">
        <div className="category">
          <span>{category}</span>
        </div>
        <div className="title-product text-dark">
          <h3>{title}</h3>
        </div>
        <div className="description-prod text-secondary">
          <p>{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="wcf-left"><span className="price text-danger">{price} &euro;</span></div>
          <Link to={`/product/${id}`} className="btn btn-primary mt-1" style={{width:'150px',fontSize:'15px'}}>View Details</Link>
        </div>
      </div>
    </div>
  </div>
    );
  }
  export default ProductCard;