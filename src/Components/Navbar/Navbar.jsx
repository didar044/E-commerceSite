import React, { useContext, useState } from 'react';
import './Navbar.css'
import Slogo from '../Assets/online-shopping.png'
import Clogo from '../Assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from './../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartItem } = useContext(ShopContext);

    // Toggle mobile menu open/close
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    // Close mobile menu when a menu link is clicked (optional)
    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        if (mobileMenuOpen) setMobileMenuOpen(false);
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to='./' onClick={() => { handleMenuClick("shop") }}>
                    <img src={Slogo} alt="" width={'80px'} />
                </Link>
                <Link to='./' onClick={() => { handleMenuClick("shop") }} style={{ textDecoration: 'none' }}>
                    <p>SHOOPER</p>
                </Link>
            </div>

            
            <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

           
            <div className={`nav-menu-login-cart-wrapper ${mobileMenuOpen ? "open" : ""}`}>
                <ul className="nav-menu">
                    <li onClick={() => handleMenuClick("shop")}>
                        <Link to='/' style={{ textDecoration: 'none', color: '#646464' }}>SHOP</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => handleMenuClick("mens")}>
                        <Link to='/mens' style={{ textDecoration: 'none', color: '#646464' }}>MEN </Link>
                        {menu === "mens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => handleMenuClick("womens")}>
                        <Link to='/womens' style={{ textDecoration: 'none', color: '#646464' }}>WOMEN</Link>
                        {menu === "womens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => handleMenuClick("kids")}>
                        <Link to='/kids' style={{ textDecoration: 'none', color: '#646464' }}>KIDS</Link>
                        {menu === "kids" ? <hr /> : <></>}
                    </li>
                </ul>
               <div className='nav-login-cart'>
                    <Link to='/login'> <button>Login </button></Link>
                    <Link to='/cart' className="cart-icon-wrapper">
                        <img src={Clogo} alt="" />
                        <div className="nav-cart-count">{getTotalCartItem(0)}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
