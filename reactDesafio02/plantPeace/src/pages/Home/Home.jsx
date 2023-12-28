// import styles from "./Home.module.css"
import StepsToTakeCare from "../../components/cards/stepsToTakeCare/StepsToTakeCare";
import WeeksMostPopular from "../../components/cards/weeksMostPopular/WeeksMostPopular"


const Home = () => {
  return (
    <div>
      <StepsToTakeCare />
      <WeeksMostPopular/>
    </div>
  )
}

export default Home;