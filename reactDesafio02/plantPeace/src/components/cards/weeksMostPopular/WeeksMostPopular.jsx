import React from "react";

import style from "./WeeksMostPopular.module.css"

const WeeksMostPopular = ({plants}) => {
    return (
        <div className={style.container}>
            <section className={style.sectionWeeks}>
                <h1>
                    <span className={style.lunarGreenText}>This Weeks Most Popular</span>
                    <span className={style.avacadoText}> And<br/>Best Selling</span>
                </h1>
            </section>
            <section className={style.cards}>

            </section>
        </div>
        
    )
}

export default WeeksMostPopular;