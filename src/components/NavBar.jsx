import { Link } from "react-router-dom";
import { getNavs } from "../Api";


const NavBar = () => {
    getNavs().then(({categories}) => {
        (
            <nav className="navBar">
            {categories.map(
            (
                category
            ) => {
                const category_link = `/categories/${category.slug}`
                return (
                    <li key={category.slug}>
                        <Link to={category_link}>category</Link>
                    </li>
                )
            }
            )}
            </nav>
        )
    })
};
    
export default NavBar;