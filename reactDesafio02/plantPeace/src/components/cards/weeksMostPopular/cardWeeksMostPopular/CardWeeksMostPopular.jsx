import React from "react";
import styles from "./CardWeeksMostPopular.module.css";

const CardWeeksMostPopular = ({image, title, price}) => {
    return <div className={styles.container}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
}

export default CardWeeksMostPopular;