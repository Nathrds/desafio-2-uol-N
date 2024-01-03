// import React from 'react'

import styles from './MoreAbout.module.css'

import ImagePlant from "./AboutPlant.png"

const CardMoreAboutPlant = () => {
  const textoComAspas = "Ladyfinger cactus ('Echinocereus pentalophus') is also know as Alice, Devil's Fingers, and Dog Tail, it needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak, Aphids and mealybugs are also a danger. Avoiding wet soil can help with succes with a ladyfinger cactus.";
  return (
    <div className={styles.container2}>
      <div className={styles.image}>
        <img className={styles.ImagePlant} src={ImagePlant} alt="Cactus Image"/>
      </div>
      <div className={styles.containerContent2}>
        <h1 className={styles.title}>Echinocereus Cactus</h1>
        <h2>A Majestic Addition to You Plant Collection</h2>
        <section className={styles.label}>

        </section>
        <h2 className={styles.price}>$139.99</h2>
        <section className={styles.features}>
          <div className={styles.featuresTitle}>
            <h1>Features</h1>
            <ul className={styles.topics}>
                <li>Species Echinocereus spp.</li>
                <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
                <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
                <li>Pot Size: Avaliable in various pot sizes to suit your preference and needs</li>
            </ul>
          </div>
        </section>
        <section className={styles.description}>
          <div className={styles.descriptionTitle}>
            <h1>Description</h1>
            <p>{textoComAspas}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardMoreAboutPlant