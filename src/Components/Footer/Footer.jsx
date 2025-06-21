import React from 'react';
import './Footer.css'
import shop from '../Assets/online-shopping.png'
import print from '../Assets/pinterest.png'
import face from '../Assets/social.png'
import you from '../Assets/youtube.png'
import inst from '../Assets/instagram.png'
import what from '../Assets/whatsapp.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={shop} alt="" />
                <p>SHOOPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={print} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={face} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={what} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={you} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={inst} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Reserved</p>
            </div>
        </div>
    );
};

export default Footer;