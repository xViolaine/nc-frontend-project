import { Link } from "react-router-dom"

const NavSubmenu = ({allCategories}) => {
    return (
        <ul className="NavSubmenu">
            {allCategories.map((category) => {
                return (
                    <Link className="Link" to={`/reviews?category=${category.slug}`} key={`${category.slug}`}>
            <li className="NavSubmenuItem">{category.slug}</li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default NavSubmenu;