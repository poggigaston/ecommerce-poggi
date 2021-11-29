import React from 'react';

const Button = ({texto, className}) => {
    return (
        <button className={className}>{texto}</button>
    )
}

export default Button