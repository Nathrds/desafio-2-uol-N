import styles from './Register.module.css'
//import { useState, useEffect } from "react";
import SquareButton from "../../components/buttons/squareButton/SquareButton.jsx";
import plantImage from "../../assets/img/logo-plantpeace.svg"

const Register = () => {

  return (
    <div className={styles.container}>

      <h1>Plant registration</h1>
      <form>
        <label>
            <section className={styles.teste}>
            
            <span className={styles.spanStyle}>Plant name:</span>
            <input type="text" name="plantName" placeholder="Echinocereus Cactus"/>
            
            <span className={styles.spanStyle}>Plant subtitle:</span>
            <input  type="text" name="plantSubtitle" placeholder="A majestic addition to your plant collection"/>
            
            <span className={styles.spanStyle}>Plant type:</span>
            <input type="text" name="plantType" placeholder="Cactus" />
            
            <span className={styles.spanStyle}>Price:</span>
            <input type="text" name="plantPrice" placeholder="$139.99" />
            
            <span className={styles.spanStyle}>Discount percentage:</span>
            <input type="text" name="plantDiscount" placeholder="20%" />
            
            <span className={styles.spanStyle}>Label:</span>
            </section>
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

            <span className={styles.spanStyle}>Features:</span>
            <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Species: Echinocereus..." />

            <span className={styles.spanStyle}>Description:</span>
            <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Ladyfinger cactus..." />

            <button className={SquareButton}>Register</button>
        </label>
      </form>

    </div>
  );
};

export default Register;