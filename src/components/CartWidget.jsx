import React from 'react';
import { Link } from 'react-router-dom';

export default function CartWidget () {    
    
    return (
        
        <div>
            <Link to="/Cart"><span style={{color:'white'}}>Cart <i style={{color:'white', with:'15px'}} className="fas fa-shopping-cart fa-1x pe-5"> 0</i></span></Link>           
        </div>
            
    )
}

