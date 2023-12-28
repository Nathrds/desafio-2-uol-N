import styles from "./Header.module.css"
import Logo from "../../assets/img/logo-plantpeace.png"
import User from "../../assets/img/user.png"
import {NavLink} from "react-router-dom"

const Header = () => {

  return (
    <nav className={styles.navHeader}>
        <NavLink to="/">
            <img src={Logo} alt="Site logo with a plant" />
        </NavLink>
        <ul>
            <li>
                <NavLink to="/" className={styles.linkPages}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={styles.linkPages}>Register</NavLink>
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