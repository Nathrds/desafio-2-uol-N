import styles from "./StepsToTakeCare.module.css"

import { NavLink } from "react-router-dom"

import elipseDrop from "../../../assets/img/imgStepsToCare/Ellipse-drop1.png"
import elipseSun from "../../../assets/img/imgStepsToCare/Ellipse-sun2.png"
import elipseFolder from "../../../assets/img/imgStepsToCare/Ellipse-folder3.png"

import image01Steps from "../../../assets/img/imgStepsToCare/image01_Steps.png"
import image02Steps from "../../../assets/img/imgStepsToCare/image02_Steps.png"
import image03Steps from "../../../assets/img/imgStepsToCare/image03_Steps.png"

import SquareButton from "../../buttons/squareButton/SquareButton"

const StepsToTakeCare = () => {
  return (
    <div id="scrollLearn" className={styles.containerSteps}>
      <section className={styles.sectionSteps}>
        <h1>Steps To Take Care Of Your <span>Plants</span></h1>
        <p>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you all be well on your way to maintaining healthy and thriving plants.</p>
      </section>

      <div className={styles.containerStepsCards}>
        <section className={styles.sectionStepsD_S_F}>
          <img src={elipseDrop} />
          <h2>Watering</h2>
          <p>water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.</p>
        </section>
        <section className={styles.sectionStepsD_S_F}>
          <img src={elipseSun} />
          <h2>Sunlight</h2>
          <p>Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs</p>
        </section>
        <section className={styles.sectionStepsD_S_F}>
          <img src={elipseFolder} />
          <h2>Nutrients and Fertilizing</h2>
          <p>Choose a suitable fertilizer based on the specific needs of your plants, whether it is a balanced or specialized formula.</p>
        </section>
      </div>

      <div className={styles.containerStepsImage}>
        <section className={styles.sectionSetepsImage}>
          <div className={styles.sectionImage01}><img src={image01Steps} alt="" /></div>
          <div className={styles.sectionImage02}><img src={image02Steps} alt="" /></div>
          <div className={styles.sectionImage03}>
            <img src={image03Steps} alt="" />
            <p>Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we do not stop there! We believe that knowledge is the key to a thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you are a seasoned gardener or just starting your green journey, our goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!</p>
          <NavLink to="https://www.gardenia.net/plants/plant-types" target="_blank" rel="noopener noreferrer">
              <SquareButton title={"See more photos"} />
          </NavLink>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StepsToTakeCare