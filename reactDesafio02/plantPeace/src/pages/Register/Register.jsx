import styles from './Register.module.css'
//import { useState, useEffect } from "react";
import SquareButton from "../../components/buttons/squareButton/SquareButton.jsx";
import plantImage from "../../assets/img/imgDiscovery/right plant p.png";

const Register = () => {

  return (
    <div className={styles.defaultContainer}>
      
      <h1>Plant registration</h1>
      <form>
        <label>
        <span>Plant name:</span>
          <input type="text" name="plantName" placeholder="Echinocereus Cactus"/>
          
          <span className={styles.span}>Plant subtitle:</span>
          <input  type="text" name="plantSubtitle" placeholder="A majestic addition to your plant collection"/>
          
          <span>Plant type:</span>
          <input type="text" name="plantType" placeholder="Cactus" />
          
          <span>Price:</span>
          <input type="text" name="plantPrice" placeholder="$139.99" />
          
          <span>Discount percentage:</span>
          <input type="text" name="plantDiscount" placeholder="20%" />
          
          <span>Label:</span>
          <section className={styles.section}>  
            <div className={styles.radioStyle}>
              <input type="radio" name="indoor" />
              <label className={styles.radioText}>Indoor</label>

            </div>
            <div className={styles.radioStyle}>
              <input type="radio" name="outdoor" />
              <label className={styles.radioText}>Outdoor</label>
            </div>
          </section>

          <span>Features:</span>
          <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Species: Echinocereus..." />

          <span>Description:</span>
          <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Ladyfinger cactus..." />

          <button className={SquareButton}>Register</button>
        </label>
      </form>
      
      <div className={styles.imageContainer}>
        <img className={styles.imageStyle} src={plantImage} alt="Right plant" />
      </div>
    </div>
  );
};

export default Register;