import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from './../../Context/ShopContext';
import r_i from '../Assets/minus.png';
import r_pluse from '../Assets/plus-symbol-button.png';
import clear_pluse from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
    const {deleteFromCart,getTotalCartAmount,all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
   //ExtraComponent Order page proccess
   const naviGate=useNavigate(); 
    return (
        <div className='cartitems'>
            <div className="cart-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Add Quantity</p>
                <p>Reduce Qty</p>
                <p>Remove</p>

            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div  key={e.id}>
                        <div className="cart-format cart-format-main">
                            <img src={e.image} alt="" className='carticon-p-i' />
                            <p>{e.name}</p>
                            <p>$ {e.new_price}</p>
                            <button className='car-quin' onClick={() => { addToCart(e.id) }}>{cartItems[e.id]}</button>
                            <p>$ {e.new_price * cartItems[e.id]}</p>
                            <img src={r_pluse} className='r-p-i' alt="" onClick={() => { addToCart(e.id) }} />
                            <img src={r_i} className='r-p-i' alt="" onClick={() => { removeFromCart(e.id) }} />
                            <img src={clear_pluse} className='r-p-i' alt="" onClick={() => { deleteFromCart(e.id) }} />
                            {/* <button onClick={() => { deleteFromCart(e.id) }}>🗑️</button> */}

                        </div>
                        <hr />

                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="ci-t">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-t-i">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        
                        <div className="cart-t-i">
                            <p>Shipping Fee</p>
                            <p>${getTotalCartAmount()===0?0:30}</p>
                        </div>
                        <hr />
                        <div className="cart-t-i">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()===0?0:getTotalCartAmount()+30}</h3>
                        </div>
                        
                    </div>

                    <button onClick={()=>naviGate('/order')}>Proced To Checkout</button>

                </div>
                <div className="cart-promocode">
                    <p>If You have promo code, Enter it here </p>
                    <div className='cart-i-p'>
                          <input type="text" placeholder='PROMO CODE ' /> 
                          <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;