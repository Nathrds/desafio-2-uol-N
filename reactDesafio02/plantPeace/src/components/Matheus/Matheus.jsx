import React from "react";
import styles from "./Matheus.module.css"

const Matheus = ({model}) => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionImg}>
                <img src={`src/${model.imgMe}`} alt={model.name} />
            </section>
            <section className={styles.sectionContent}>
                <div>
                    <h1>{model.name}</h1>
                    <p>{model.description}</p>
                </div>
            </section>
        </div>
    )
}

export default Matheus;