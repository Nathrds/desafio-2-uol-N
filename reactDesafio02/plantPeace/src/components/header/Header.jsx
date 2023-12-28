// import "../../App.css"
import styles from "./Header.module.css"
import Logo from "./../img/logo-plantpeace.svg"
import User from "./../img/user.svg"
import {NavLink} from "react-router-dom"

const Header = () => {

  return (
    <nav className={styles.navHeader}>
        <NavLink to="/">
            <img src={Logo} alt="Site logo with a plant" />
        </NavLink>
        <ul>
            <li>
                <NavLink className={styles.linkPages}>Home</NavLink>
            </li>
            <li>
                <NavLink className={styles.linkPages}>Register</NavLink>
            </li>
            <li>
                <NavLink className={styles.linkPages}>Products</NavLink>
            </li>
            <li>
                <NavLink className={styles.linkPages}>About Us</NavLink>
            </li>
        </ul>
        <NavLink>
            <img src={User} alt="Image for users to login" />
        </NavLink>
    </nav>
  )
}

export default Header