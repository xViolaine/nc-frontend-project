import { Link } from "react-router-dom"
import NavSubmenu from "./NavSubmenu"

const NavBar = ( { allCategories }) => {
    return (
        <nav className="NavBar">
            <ul className="NavPoints">
                <li className="NavBarItem">
                    <Link className="Link" to="/">Home</Link>
                </li>
                <li className="NavBarItem-Dropdown">
                    <Link className="Link" to="">All Categories</Link>
                    <NavSubmenu allCategories={allCategories}/>
                </li>
                <li className="NavBarItem">
                    <Link className="Link" to="/reviews">All Reviews</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar