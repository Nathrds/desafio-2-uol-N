import styles from "./Header.module.css"

import Logo from "../../assets/img/logo-plantpeace.png"
import User from "../../assets/img/user.png"

import {NavLink} from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className={styles.navHeader}>
        <img src={Logo} alt="Site logo with a plant" />
        <div className={styles.menuIcon} onClick={toggleMenu}>
            ☰
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
            <li>
                <NavLink to="/" className={styles.linkPages} onClick={toggleMenu}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={styles.linkPages} onClick={toggleMenu}>
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={styles.linkPages} onClick={toggleMenu}>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to="/aboutus" className={styles.linkPages} onClick={toggleMenu}>
                    About Us
                </NavLink>
            </li>
        </ul>
        <NavLink>
            <img src={User} alt="Image for users to login" />
        </NavLink>
    </nav>
  )
}

export default Header