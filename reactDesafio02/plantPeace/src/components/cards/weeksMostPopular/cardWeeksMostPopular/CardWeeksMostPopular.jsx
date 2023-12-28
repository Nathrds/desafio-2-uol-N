import React from "react";
import styles from "./CardWeeksMostPopular.module.css";

const CardWeeksMostPopular = ({image, title, price}) => {
    return <div className={styles.container}>
        <img src={image} alt={title} className={styles.image} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{price}</p>
    </div>
}

export default CardWeeksMostPopular;