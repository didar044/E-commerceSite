import React from 'react';
import './Breadcrums.css'
import ar_i from'../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product} =props;
    return (
        <div className='breadcrum'>
            Home <img src={ar_i} alt="" /> SHOPE <img src={ar_i} alt="" />{product.category} <img src={ar_i} alt="" />{product.name}

        </div>
    );
};

export default Breadcrums;