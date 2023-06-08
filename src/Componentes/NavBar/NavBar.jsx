import {CartWidget} from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
    <header>
        <Link className="titulo" to={"/"}>
            <h1>Good Drink</h1>
        </Link>

    <nav>
        <ul className="NavBar">
            <li>
                <NavLink className="navLink" to={`/categoria/1`}> Bebida Blanca </NavLink>
            </li>
            <li>
                <NavLink className="navLink" to={`/categoria/2`}> Cervezas </NavLink>
            </li>
            <li>
                <NavLink className="navLink" to={`/categoria/3`}> Clasicos </NavLink>
            </li>
        </ul>
            <CartWidget />
        </nav>

        

    </header>
    )
}

export default NavBar