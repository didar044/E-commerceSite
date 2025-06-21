import React,{createContext, useEffect, useState} from 'react';

import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext (null);
// why not work?
// const getDefaultCart = ()=>{
//     let cart={};
//     for (let index = 0; index < all_product.length+1; index++) {
//         cart [index] = 0;
        
//     }
//     return cart;
    
// }
const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
};


const ShopContextProvider=(props)=>{

       // Load from localStorage if exists.Last
       const getInitialCart = () => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            return JSON.parse(savedCart);
        } else {
            return getDefaultCart();
        }
    };
    
    // Problem. product add cart with price calculation
    const [cartItems,setCartItems]=useState( getInitialCart());

    
     // Save to localStorage whenever cart changes
     useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    // End localsoter
    
    const addToCart = (itemId)=>{

        console.log(`Adding item with ID: ${itemId}`);

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const deleteFromCart = (itemId) => {
        setCartItems(prev => {
          const updatedCart = { ...prev };
          delete updatedCart[itemId]; // Completely remove the item key
          return updatedCart;
        });
      };
      // Cart total 
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
           
        }
        return totalAmount;
    }
    //toast
        const getTotalCartItem=()=>{
             let totalItem=0;
             for(const item in cartItems)
             {
                if(cartItems[item]>0)
                {
                    totalItem += cartItems[item];
                }
             }
             return totalItem;
        }
     //end
     const contextvalue={deleteFromCart,getTotalCartItem,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return (
       <ShopContext.Provider value={contextvalue}>
             {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider;
//i don't got it

