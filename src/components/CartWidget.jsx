import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    
    return (
        <Link to ="/cart" >
        <div>
            <span style={{color:'white'}}>Cart <i style={{color:'white', with:'15px'}} className="fas fa-shopping-cart fa-1x pe-5"> 0</i></span>
        </div>
        </Link>    
    )
}

export default CartWidget