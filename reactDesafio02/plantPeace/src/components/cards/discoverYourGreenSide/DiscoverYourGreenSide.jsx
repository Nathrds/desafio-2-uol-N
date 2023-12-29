// import React from 'react'
import styles from './Discover.module.css'
import RightImage from "../../../assets/img/imgDiscovery/right plant p.png";
import LeftImage from "../../../assets/img/imgDiscovery/left plant p.png";
// import Line from "../../../assets/img/imgDiscovery/line.svg";


const DiscoverYourGreenSide = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerContent}>
            <h1 className={styles.h1}><div className={styles.Line}></div>Love for Nature</h1>
            <h2 className={styles.h2}>Discover Your <span className={styles.green}>Green</span> Side</h2>
            <p className={styles.p}>We are you one-stop destination for all things green and growing. Our website
                offers a array of stunning plants, ranging from vibrant flowers to lush indoor foliage,
                allowing you to create your own green oasis.
            </p>
            <div className={styles.img1}>
                <img className={styles.image2} src={LeftImage} alt="Left plant" />
            </div>
        </div>
        
        <div className={styles.img2}>
            <img className={styles.image1} src={RightImage} alt="Right plant" />
        </div>
 </div>
  )
}

export default DiscoverYourGreenSide;