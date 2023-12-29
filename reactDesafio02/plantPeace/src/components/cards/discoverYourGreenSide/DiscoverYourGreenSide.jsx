import styles from './Discover.module.css'

// import { NavLink } from "react-router-dom"

import RightImage from "../../../assets/img/imgDiscovery/right plant p.png";
import LeftImage from "../../../assets/img/imgDiscovery/left plant p.png";

import SquareButton from "../../buttons/squareButton/SquareButton"

const DiscoverYourGreenSide = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerContent}>
            <h1 className={styles.h1}><div className={styles.Line}></div>Love for Nature</h1>
            <h2 className={styles.h2}>Discover Your <span className={styles.green}>Green</span> Side</h2>
            <p className={styles.p}>We are you one-stop destination for all things green and growing. Our website
                offers a array of stunning plants, ranging from vibrant flowers to lush indoor<br/>foliage,
                allowing you to create your own green oasis.
            </p>
            <section className={styles.button}>
                <a href="#sectionScroll">
                    <SquareButton title={"Shop now"} />
                </a>
            </section>
            <section className={styles.learn}>
                <p className={styles.p2}>Learn Gardening &rarr;</p>
            </section>
            <div className={styles.img2}>
                <img className={styles.image2} src={LeftImage} alt="Left plant" />
            </div>
        </div>
        
        <div className={styles.img1}>
            <img className={styles.image1} src={RightImage} alt="Right plant" />
        </div>
 </div>
  )
}

export default DiscoverYourGreenSide;