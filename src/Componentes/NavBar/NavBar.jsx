import {CartWidget} from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
    <header>
        <Link to={"/"}>
            <h1>Good Drink</h1>
        </Link>

    <nav>
        <ul>
            <li>
                <NavLink to={`/categoria/1`}> Bebida Blanca </NavLink>
            </li>
            <li>
                <NavLink to={`/categoria/2`}> Cervezas </NavLink>
            </li>
            <li>
                <NavLink to={`/categoria/3`}> Clasicos </NavLink>
            </li>
        </ul>
        </nav>

        <CartWidget />
        

    </header>
    )
}

export default NavBar