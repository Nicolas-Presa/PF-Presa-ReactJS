import { useState, useContext, } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../Services/Config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    console.log(carrito)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenID, setOrdenId] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        };

        
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                carrito.forEach((prod) => {
                    const docRef = doc(db, 'Inventario', prod.item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, { stock: dbDoc.data().stock - prod.cantidad })
                        })
                })

                setOrdenId(docRef.id);
                vaciarCarrito();
            })

            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden");
            })


    }


    return (
        <div>
            <h2 className="titulo">Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div className="item" key={producto.item.id}>
                        <p className="item">
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p className="item">Precio: ${producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <hr />
                <p className="item">Tota de compra: $ {total} </p>
                <hr />
                <hr />
                <br />
                <div className="form">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form">
                    <label htmlFor=""> Email Confirmacion </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type="submit" className="boton__finalizar__compra"> Finalizar Compra </button>
            </form>
            {
                ordenID && (
                    <strong> ¡Gracias por tu compra! Tu numero de orden es {ordenID} </strong>
                )
            }
        </div>
    )
}

export default Checkout