import React, { useContext, useState } from 'react';
import './Navbar.css'
import Slogo from '../Assets/online-shopping.png'
import Clogo from '../Assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from './../../Context/ShopContext';

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    // Last add Total notification show
    const {getTotalCartItem}=useContext(ShopContext)
    // End
    return (
        <div  className='navbar'>
            <div className="nav-logo">
             <Link to='./' onClick={()=>{setMenu("shop")}}>  <img src={Slogo} alt="" width={'80px'}/></Link> 
             <Link to='./' onClick={()=>{setMenu("shop")}} style={{textDecoration:'none' }}>    <p >SHOOPER</p></Link> 
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none', color: '#646464'}}>SHOP</Link>  {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}> <Link to='/mens' style={{textDecoration:'none', color: '#646464'}}>MEN </Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}> <Link to='/womens' style={{textDecoration:'none', color: '#646464'}}>WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' style={{textDecoration:'none', color: '#646464'}}>KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'> <button>Login </button></Link>
                <Link to='/cart'><img src={Clogo} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItem(0)}</div>
            </div>
        </div>
    );
};

export default Navbar;