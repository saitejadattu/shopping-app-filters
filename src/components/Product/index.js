import React from "react";
import "./index.css";
import { FaRegHeart } from "react-icons/fa6";
const Product = (props) => {
  const { product } = props;
  const { image, title } = product;
  return (
    
      <li className="product-list-item">
        <img className="product-image" loading="lazy" alt="img" src={image} />
        <div>
          <p className="text">{title}</p>
          <p className="heart-png-text">
            <span className="sign-text">Sign in </span> in or Create an account
            to see pricing
            <FaRegHeart />
          </p>
        </div>
      </li>
  );
};

export default Product;
