import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import d_i from '../Components/Assets/dropdown_icon.png';
import Item from './../Components/Items/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="" className='shopcategory-banner' />
            <div className="shopcate-index">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcat-sort'>
                    Sort by <img src={d_i} alt="dropdown icon" />
                </div>
            </div>
            <div className='sc-product'>
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="sc-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
