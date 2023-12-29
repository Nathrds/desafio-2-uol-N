import React from "react";
import style from "./PlantsInSale.module.css"

const PlantsInSale = ({plants}) => {
    return (
        <div className={style.container}>
            <section className={style.sectionPlants}>
                <h1>
                    <span className={style.avacadoText}>Plants In</span>
                    <span className={style.lunarGreenText}> Sale</span>
                </h1>
            </section>
            <section className={style.cards}>
            </section>
        </div>
        
    )
}

export default PlantsInSale;