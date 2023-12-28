import "../../App.css"
import styles from "./Footer.module.css"
import Logo from "./../img/logo-footer.svg"

import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerInformation}>
            <article>
                <h1>Stay Fresh</h1>
                <p>compassinhos@gmail.com</p>
                <p>+55 41 99999-9999</p>
            </article>
            <nav>
                <section>
                    <h2>Links</h2>
                    <NavLink className={styles.navLink}>About Us</NavLink>
                    <NavLink className={styles.navLink}>Products</NavLink>
                    <NavLink className={styles.navLink}>Blogs</NavLink>
                </section>
                <section>
                    <h2>Community</h2>
                    <NavLink className={styles.navLink}>About Us</NavLink>
                    <NavLink className={styles.navLink}>Products</NavLink>
                    <NavLink className={styles.navLink}>Blogs</NavLink>
                </section>
            </nav>
        </div>
        <footer>
                <img src={Logo} alt="Site logo with a plant" />
                <p>Compassinhos ®. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer