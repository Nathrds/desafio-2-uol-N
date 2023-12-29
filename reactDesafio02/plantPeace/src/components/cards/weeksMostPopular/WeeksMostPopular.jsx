import React from "react";
import { dataPlants } from "../../../data/jsonData";
import style from "./WeeksMostPopular.module.css"
import CardsSliders from "../../sliders/CardsSliders";

const WeeksMostPopular = () => {
    return (
        <div className={style.container}>
            <section className={style.sectionWeeks}>
                <h1 className={style.sectionWeeks}>
                    <span className={style.lunarGreenText}>This Weeks Most Popular</span>
                    <span className={style.avacadoText}> And Best Selling</span>
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

export default WeeksMostPopular;