// import styles from "./Home.module.css"
import DiscoverYourGreenSide from "../../components/cards/discoverYourGreenSide/DiscoverYourGreenSide";
import PlantsInSale from "../../components/cards/plantsInSale/PlantsInSale";
import StepsToTakeCare from "../../components/cards/stepsToTakeCare/StepsToTakeCare";
import WeeksMostPopular from "../../components/cards/weeksMostPopular/WeeksMostPopular"


const Home = () => {
  return (
    <div>
      <DiscoverYourGreenSide />
      <StepsToTakeCare />
      <WeeksMostPopular/>
      <PlantsInSale/>
    </div>
  )
}

export default Home;