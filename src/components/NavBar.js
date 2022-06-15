import { Link } from "react-router-dom"
import NavSubmenu from "./NavSubmenu"
import { useEffect, useState } from 'react'
import { getAllCategories } from './utils/API'

const NavBar = () => {
  const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((categoriesFromAPI) => {
          setAllCategories(categoriesFromAPI)
        })
      }, [])

    return (
        <nav className="NavBar">
            <ul className="NavPoints">
                <li className="NavBarItem">
                    <Link className="Link" to="/">Home</Link>
                </li>
                <li className="NavBarItem-Dropdown">
                    <div className="Link">All Categories</div>
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