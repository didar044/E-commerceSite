import React from 'react';
import './Hero.css'
import hand_icone from '../Components/Assets/goodbye (1).png'
import new_arival from '../Components/Assets/newarivell1.webp'

const Hero = () => {
    return (
        <div className='hero'>
             <div className="hero-left">
                  <h2>NEW ARRIVALS ONLY </h2>
                  <div>
                     <div className="hand-hand-icon">
                        <p>NEW</p>
                        <img src={hand_icone} alt="" />
                        </div>
                        <p>COLLECTION</p>
                        <p>FOR EVERYONE</p> 
                  </div>  
                  <div className="hero-latest-button">
                      <div>Latest Collecton</div> 
                      <img src="" alt="" />   
                   </div>  
             </div>

             <div className="hero-right">
               <img src={new_arival}  alt="" />
             </div>
        </div>
    );
};

export default Hero;