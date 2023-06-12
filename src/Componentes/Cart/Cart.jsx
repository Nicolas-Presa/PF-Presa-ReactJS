import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito</h2>
                <Link to='/'> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="cart2">
                <h3 className="cart2__total" >Total: ${total} </h3>
                <h3 className="cart2__cantidad" >Cantidad total: {cantidadTotal} </h3>
                <button className="cart2__boton__vaciar" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
                <Link className="cart2__boton__finalizar" to='/checkout'> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart