import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to='/'>Home   </Link>

            <Link to='/categories/stratergy'>stratergy    </Link>

            <Link to='/categories/hidden-roles'>hidden roles    </Link>

            <Link to='/categories/dexterity'>dexterity    </Link>

            <Link to='/categories/push-your-luck'>push your luck    </Link>

            <Link to='/categories/roll-and-write'>roll and write    </Link>

            <Link to='/categories/deck-builder'>deck builder    </Link>

            <Link to='/categories/engine-building'>engine building    </Link>

        </nav>
    );
};
    
export default NavBar;