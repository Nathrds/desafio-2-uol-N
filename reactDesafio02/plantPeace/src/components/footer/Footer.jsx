import styles from "./Footer.module.css"
import Logo from "../../assets/img/logo-footer.png"

import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerInformation}>
            <article className={styles.articleFooter}>
                <h1>Stay Fresh</h1>
                <p>compassinhos@gmail.com</p>
                <p>+55 41 99999-9999</p>
            </article>
            <nav className={styles.navFooter}>
                <section className={styles.sectionFooter}>
                    <h2>Links</h2>
                    <NavLink to="/aboutus" className={styles.navLink}>About Us</NavLink>
                    <NavLink to="/products" className={styles.navLink}>Products</NavLink>
                    <NavLink className={styles.navLink}>Blogs</NavLink>
                </section>
                <section className={styles.sectionFooter}>
                    <h2>Community</h2>
                    <NavLink to="/aboutus" className={styles.navLink}>About Us</NavLink>
                    <NavLink to="/products" className={styles.navLink}>Products</NavLink>
                    <NavLink className={styles.navLink}>Blogs</NavLink>
                </section>
            </nav>
        </div>
        <footer className={styles.footerWithImg}>
                <img src={Logo} alt="Site logo with a plant" />
                <p>Compassinhos ®. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer