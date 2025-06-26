import React, { useContext } from 'react';
import './Css/PlaceOrder.css'
import { ShopContext } from './../Context/ShopContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(ShopContext);

    return (
        <form className='place-orders'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <input type="text" placeholder='First Name' required />
                <input type="text" placeholder='Last Name' required />
                <input type="email" placeholder='Email Address' required />
                <input type="text" placeholder='Street' required />
                <div className="multi-fields">
                    <input type="text" placeholder='City' required />
                    <input type="text" placeholder='State' required />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip Code' required />
                    <input type="text" placeholder='Country' required />
                </div>
                <input type="tel" placeholder='Phone' required />
            </div>

            <div className="separator" />

            <div className="place-order-right">
                <div className="ci-t">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-t-i">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                        <div className="cart-t-i">
                            <p>Shipping Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 30}</p>
                        </div>

                        <hr />

                        <div className="cart-t-i">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}</h3>
                        </div>
                    </div>

                    <button type="submit">Proceed To Payment</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
