import React, { useState } from 'react';
import './Navbar.css'
import Slogo from '../Assets/online-shopping.png'
import Clogo from '../Assets/shopping-cart.png'

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    return (
        <div  className='navbar'>
            <div className="nav-logo">
                <img src={Slogo} alt="" width={'80px'}/>
                <p>SHOOPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}>MEN {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}>WOMEN {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}>KIDS {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={Clogo} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;