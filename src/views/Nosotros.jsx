import React from 'react'
import flia from '../assets/images/flia4.jpg'
import nosotros from '../assets/images/Nosotros.jpg'

export default function Nosotros () {
    
    return (
        <div>            
            <div style={{margin:0, padding:0}} className="container-fluid">
                <img id="opaco" src={flia} className="img-fluid" alt="flia4"></img>                    
            </div>

            <img src={nosotros} className="img-fluid mb-4" alt="Nosotros"></img>          
        </div>
    )
}
