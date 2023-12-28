import styles from "./StepsToTakeCare.module.css"
import elipseDrop from "../../../assets/img/imgStepsToCare/Ellipse-drop1.svg"
import elipseSun from "../../../assets/img/imgStepsToCare/Ellipse-sun2.svg"
import elipseFolder from "../../../assets/img/imgStepsToCare/Ellipse-folder3.svg"

const StepsToTakeCare = () => {
  return (
    <div className={styles.containerSteps}>
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
    </div>
  )
}

export default StepsToTakeCare