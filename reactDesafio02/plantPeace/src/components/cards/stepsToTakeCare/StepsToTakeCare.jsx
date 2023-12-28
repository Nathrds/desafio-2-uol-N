import styles from "./StepsToTakeCare.module.css"
import elipseDrop from "../../../assets/img/imgStepsToCare/Ellipse-drop1.svg"

const StepsToTakeCare = () => {
  return (
    <div>
      <section className={styles.sectionSteps}>
        <h1>Steps To Take Care Of Your <span>Plants</span></h1>
        <p>By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you all be well on your way to maintaining healthy and thriving plants.</p>
      </section>
      <section>
        <img src={elipseDrop} />
      </section>
    </div>
  )
}

export default StepsToTakeCare