import React from "react";
import styles from "./WeeksMostPopular.module.css";

const WeeksMostPopular = ({image, title, price}) => {
    return <div className={styles.container}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
}

export default WeeksMostPopular;