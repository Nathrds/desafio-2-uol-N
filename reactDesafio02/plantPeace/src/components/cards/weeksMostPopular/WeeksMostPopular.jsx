import { dataPlants } from "../../../data/db.json";
import style from "./WeeksMostPopular.module.css"
import PlantCard from "../../cards/card/PlantCard";

const WeeksMostPopular = () => {
    return (
        <div className={style.container}>
            <section className={style.sectionWeeks}>
                <h1>
                    <span className={style.lunarGreenText}>This Weeks Most Popular</span>
                    <span className={style.avacadoText}> And<br/>Best Selling</span>
                </h1>
            </section>
            <section className={style.cards}>
                <PlantCard model={dataPlants["plants"][0]} />
                <PlantCard model={dataPlants["plants"][0]} />
                <PlantCard model={dataPlants["plants"][0]} />
            </section>
        </div>
        
    )
}

export default WeeksMostPopular;