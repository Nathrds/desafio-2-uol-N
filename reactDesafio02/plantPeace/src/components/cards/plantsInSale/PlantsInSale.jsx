import React from "react";
import { dataPlants } from "../../../data/jsonData";
import style from "./PlantsInSale.module.css"
import CardsSliders from "../../sliders/CardsSliders";

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
                <CardsSliders model={dataPlants["plants"][0]} />
                <CardsSliders model={dataPlants["plants"][0]} />
                <CardsSliders model={dataPlants["plants"][0]} />
            </section>
        </div>
        
    )
}

export default PlantsInSale;