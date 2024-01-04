import React from "react";
import styles from "./Vinicius.module.css"

const Vinicius = ({model}) => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionContent}>
                <div>
                    <h1>{model.name}</h1>
                    <p>{model.description}</p>
                </div>
            </section>
            <section className={styles.sectionImg}>
                <img src={`src/${model.imgMe}`} alt={model.name} />
            </section>
            
        </div>
    )
}

export default Vinicius;