import styles from './Register.module.css'
//import { useState, useEffect } from "react";
import SquareButton from "../../components/buttons/squareButton/SquareButton.jsx";

const Register = () => {

  return (
    <div className={styles.plantContainer}>

      <h1 className={styles.h1}>Plant registration</h1>
      <form>
        <label className={styles.plantContainer}>
        <span className={styles.span}>Plant name:</span>
          <input className={styles.input} type="text" name="plantName" placeholder="Echinocereus Cactus"/>
          
          <span className={styles.span}>Plant subtitle:</span>
          <input className={styles.input}  type="text" name="plantSubtitle" placeholder="A majestic addition to your plant collection"/>
          
          <span className={styles.span}>Plant type:</span>
          <input className={styles.input} type="text" name="plantType" placeholder="Cactus" />
          
          <span className={styles.span}>Price:</span>
          <input className={styles.input} type="text" name="plantPrice" placeholder="$139.99" />
          
          <span className={styles.span}>Discount percentage:</span>
          <input className={styles.input} type="text" name="plantDiscount" placeholder="20%" />
          
          <section className='labelStyle'>
            <span className={styles.span}>Label:</span>
            <input className={styles.inputRadio} type="radio" name="indoor" />
            <label className={styles.lable}> Indoor</label>
            <input className={styles.inputRadio} type="radio" name="outdoor" />
            <label className={styles.lable}> Outdoor</label>
          </section>

          <span className={styles.span}>Features:</span>
          <textarea className={styles.textarea} type="text" name="plantDiscount" placeholder="Species: Echinocereus..." />

          <span className={styles.span}>Description:</span>
          <textarea className={styles.textarea} type="text" name="plantDiscount" placeholder="Ladyfinger cactus..." />

          <button className={SquareButton}>Register</button>
        </label>
      </form>

    </div>
  );
};

export default Register;