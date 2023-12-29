import { dataPlants } from "../../../data/db.json";
import style from "./PlantsInSale.module.css"
import PlantCard from "../../cards/card/PlantCard";

const PlantsInSale = () => {
    return (
        <div className={style.container}>
            <section className={style.sectionPlants}>
                <h1>
                    <span className={style.avacadoText}>Plants In</span>
                    <span className={style.lunarGreenText}> Sale</span>
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

export default PlantsInSale;