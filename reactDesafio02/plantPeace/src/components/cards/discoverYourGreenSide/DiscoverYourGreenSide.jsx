import styles from './Discover.module.css'

import RightImage from "../../../assets/img/imgDiscovery/right plant p.png";
import LeftImage from "../../../assets/img/imgDiscovery/left plant p.png";

import SquareButton from "../../buttons/squareButton/SquareButton"



const DiscoverYourGreenSide = () => {
    const scrollToLearn = () => {
        const section = document.getElementById('scrollLearn');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div className={styles.container}>
        <div className={styles.containerContent}>
            <div>
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
            </div>               
            <div className={styles.image2}>
                <img src={LeftImage} alt="Left plant" />
                <section className={styles.learn}>
                    <p className={styles.p2} onClick={scrollToLearn}>Learn Gardening &rarr;</p>
                </section>
            </div>
        </div>
        
        <div className={styles.img1}>
                <img className={styles.image1} src={RightImage} alt="Right plant" />
        </div>
 </div>
  );
};
export default DiscoverYourGreenSide;