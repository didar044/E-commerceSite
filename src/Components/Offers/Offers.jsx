import React from 'react';
import './Offers.css'
import exclo from '../Assets/exo.webp'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offeres-left">
               <h1>Exclusive</h1>
               <h1>Offers For You</h1>
               <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>                                                                                                                    
            </div>
            <div className="offers-right">
              <img src={exclo} alt="" />
            </div>
        </div>
    );
};

export default Offers;