import { useState, useEffect } from "react"
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(1);
    const [color, setColor] = useState("black");

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial){
            setContador(contador - 1);
        }
    }

    useEffect ( () => {
        if(contador >= 5){
            setColor("red");
        }else{
            setColor("black");
        }
    }, [contador]);


    return (
        <div className="Contador">
            <button className="boton__contador" onClick={ aumentarContador }> + </button>
            <strong style={{color: color}}> {contador} </strong>
            <button className="boton__contador" onClick={ disminuirContador }> - </button>
            
            <button className="boton__contador" onClick={ () => funcionAgregar(contador) }> Agregar Al Carrito </button>
        </div>
    )
}

export default ItemCount