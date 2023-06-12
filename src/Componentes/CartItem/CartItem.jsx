import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import "./CartItem.css"




const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);
    return (
        <div className="cart">
            <h4 className="cart__nombre"> {item.nombre} </h4>
            <p className="cart__cantidad">Cantidad: {cantidad} </p>
            <p className="cart__precio">Precio: {item.precio} </p>
            <button className="cart__boton" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem