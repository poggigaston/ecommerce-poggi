import React from 'react';

const Footer = () => {
    const style = {
        background: "grey",       
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100vw"
    }


    return (
        <div style={style}>
          <h4>Desarrollado por Gaston Poggi</h4>  
        </div>
    )
}

export default Footer
