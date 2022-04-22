import React from "react";
import "./ProductCard.css";
import { CartContext } from "../global/Context";

export const ProductCard = (props) => {
    const { product } = props;
    const { addToCart } = React.useContext(CartContext);
    const { category, price, title, rating, image } = product;

    return (
        <main className="ProductCard-wrapper">
            <img 
                src={image} alt="Product Image" 
                className="ProductCard-image" 
            />
            <p className="ProductCard-category">{category}</p>
            <p className="ProductCard-title">{title}</p>
            <p className="ProductCard-price">{price}</p>
            <p className="ProductCard-rating">{rating.rate}</p>
            <button 
                className="ProductCard-button"
                onClick={() => addToCart(product)}
                >Add to Cart
            </button>
        </main>
    );
};



