import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
return (
    <div>
        <img className='carrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> 1 </strong>
    </div>
)
}