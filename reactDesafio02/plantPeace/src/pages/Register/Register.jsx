import styles from "./Register.module.css";
//import { useState, useEffect } from "react";
import SquareButton from "../../components/buttons/squareButton/SquareButton.jsx";
import plantImage from "../../assets/img/imgDiscovery/right plant p.png";
import { NavLink } from "react-router-dom";


const Register = () => {
  return (
    <div className={styles.defaultContainer}>
      <form>
        <section className={styles.formStyle}>
          <label>
            
            <div className={styles.h1Style}>
              <h1>Plant registration</h1>
            </div>

            <span className={styles.spanStyle}>Plant name:</span>
            <input className={styles.inputStyle} type="text" name="plantName" placeholder="Echinocereus Cactus" />

            <span className={styles.spanStyle}>Plant subtitle:</span>
            <input className={styles.inputStyle} type="text" name="plantSubtitle" placeholder="A majestic addition to your plant collection" />

            <span className={styles.spanStyle}>Plant type:</span>
            <input className={styles.inputStyle} type="text" name="plantType" placeholder="Cactus" />

            <section className={styles.priceSection}>
              <div>
                <span className={styles.spanStyle}>Price:</span>
                <input className={styles.priceStyle} type="text" name="plantPrice" placeholder="$139.99" />
              </div>

              <div>
                <span className={styles.spanStyle}>Discount percentage:</span>
                <input className={styles.priceStyle} type="text" name="plantDiscount" placeholder="20%" />
              </div>
            </section>
            
            <span className={styles.spanStyle}>Label:</span>
              <section className={styles.section}>
                <div className={styles.radioStyle}>
                  <input type="radio" name="plantLocation" value="indoor" id="indoor" />
                  <label htmlFor="indoor" className={styles.radioText}>Indoor</label>
                </div>
                <div className={styles.radioStyle}>
                  <input type="radio" name="plantLocation" value="outdoor" id="outdoor" />
                  <label htmlFor="outdoor" className={styles.radioText}>Outdoor</label>
                </div>
            </section>

            
            <span className={styles.spanStyle}>Features:</span>
            <div className={styles.textareaStyle}>
              <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Species: Echinocereus..."/>
            </div>
            
            <span className={styles.spanStyle}>Description:</span>
            <div className={styles.textareaStyle}>
              <textarea className={styles.largeTextarea} type="text" name="plantDiscount" placeholder="Ladyfinger cactus..."/>
            </div>

            <div className={styles.regButtonDiv}>
              <NavLink className={styles.registerButton}>
                <SquareButton title={"Register"}/>
              </NavLink>
            </div>
            
          </label>
        </section>
      </form>
      <section className={styles.containerSection}> 
        <div className={styles.imageContainer}>
          <img className={styles.imageStyle} src={plantImage} alt="Right plant" />
        </div>
      </section>
    </div>
  );
};

export default Register;