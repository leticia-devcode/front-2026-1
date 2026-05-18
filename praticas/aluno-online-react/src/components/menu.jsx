import {Link, NavLink} from "react-router"
import "./Menu.css"
function Menu() {
    
    return<nav>
    <ul>
        <li><NavLink to="/"></NavLink></li>
        <li><NavLink to="/boletos">Boletos</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/faltas">Faltas</NavLink></li>
        <li><Link to="/notas">Notas</Link></li>
        <li><Link to="/requerimentos">Requerimentos</Link></li>
    </ul>
</nav>
}

export default Menu;