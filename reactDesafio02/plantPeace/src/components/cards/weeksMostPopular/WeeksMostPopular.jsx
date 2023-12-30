import React from "react";
import style from "./WeeksMostPopular.module.css"
import CardsSlider from "../../sliders/CardsSliders";



export const WeeksMostPopular = () => {
    return (
        <div id= "sectionScroll" className={style.container}>
            <section className={style.sectionWeeks}>
                <h1>
                    <span className={style.lunarGreenText}>This Weeks Most Popular</span>
                    <span className={style.avacadoText}> And<br/>Best Selling</span>
                </h1>
            </section>
            <section className={style.sectionWeeks}>
                <CardsSlider discount={false}/>
            </section>
        </div>
    )
}

export default WeeksMostPopular;