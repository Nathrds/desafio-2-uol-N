// import styles from "./Home.module.css"
import DiscoverYourGreenSide from "../../components/cards/discoverYourGreenSide/DiscoverYourGreenSide";
import StepsToTakeCare from "../../components/cards/stepsToTakeCare/StepsToTakeCare";
import WeeksMostPopular from "../../components/cards/weeksMostPopular/WeeksMostPopular"


const Home = () => {
  return (
    <div>
      <DiscoverYourGreenSide />
      <StepsToTakeCare />
      <WeeksMostPopular/>
    </div>
  )
}

export default Home;