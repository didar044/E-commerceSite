import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_i from "../Assets/star_icon.png";
import star_d_i from "../Assets/star_dull_icon.png"
import { ShopContext } from './../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    //last API and add cart  removie cart.. last work for project . come from shopcontext

    const {addToCart}=useContext(ShopContext);

    // Toast success massage .. last
    // const [success, setSuccess] = useState(false);

    // const handleAddToCart = () => {
    //     addToCart(product.id);
    //     setSuccess(true);
    //     setTimeout(() => setSuccess(false), 2000); // hide after 2 seconds
    // };
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className='productdisplay-img-main' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_i} alt="" />
                    <img src={star_i} alt="" />
                    <img src={star_i} alt="" />
                    <img src={star_i} alt="" />
                    <img src={star_d_i} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-proces">
                    <div className="productdisplay-right-p-o">${product.old_price}</div>
                    <div className="productdisplay-right-p-n">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Bonding fibers is a method of creating cloth without weaving or knitting. Instead of interlacing yarns, the fibers are joined together using heat, pressure, or adhesives. This process is commonly used to make non-woven fabrics, which are often seen in items like medical masks, felt, and reusable shopping bags.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                 {/* Lats work add to cart. onClick function add */}
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
                {/* <button onClick={()=>{handleAddToCart}}>ADD TO CART</button> */}
                {/* This is Massage */}
                {/* {success && <p style={{ color: 'green', marginTop: '10px' }}>✔️ Successfully added to cart!</p>}  */}
                <p className="productdisplay-right-category"> <span>Category: </span> Women , T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"> <span>Tags: </span> Modern , Letest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;