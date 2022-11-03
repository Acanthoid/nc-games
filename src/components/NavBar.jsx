import { useState } from "react";
import { Link } from "react-router-dom";
import { getNavs } from "../Api";


const NavBar = () => {

    const [categories, setCategories] = useState([])
    
    getNavs().then(({categories}) => {setCategories(categories)})
    return(
    <nav className="navBar"><ul>
    {categories.map((category) => {
        return(
        <li key={category.slug}>
            <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
        </li>)
    })  }          
    </ul></nav>
    )
}
        
export default NavBar;