// import React from 'react'

import styles from './MoreAbout.module.css'

import ImagePlant from "./AboutPlant.png"

import SquareButton from "../../buttons/squareButton/SquareButton"
import CardButton from '../../buttons/cardButton/CardButton'
import { NavLink } from "react-router-dom"

const CardMoreAboutPlant = () => {
  const textoComAspas = "Ladyfinger cactus ('Echinocereus pentalophus') is also know as Alice, Devil's Fingers, and Dog Tail, it needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak, Aphids and mealybugs are also a danger. Avoiding wet soil can help with succes with a ladyfinger cactus.";
  return (
    <div className={styles.container2}>
      <div className={styles.image}>
        <img className={styles.ImagePlant} src={ImagePlant} alt="Cactus Image"/>
      </div>
      <div className={styles.containerContent2}>
        <h1 className={styles.title}>Echinocereus Cactus</h1>
        <h2 className={styles.sub}>A Majestic Addition to You Plant Collection</h2>
        <section className={styles.label}>
          <CardButton label={<span>indoor</span>} />
          <CardButton  label={<span>cactus</span>} />
        </section>
        <h2 className={styles.price}>$139.99</h2>
        <section className={styles.button}>
          <NavLink to="https://www.bhg.com/gardening/plant-dictionary/" target="_blank" rel="external pag">
            <SquareButton title={"Check out"} />
          </NavLink>    
        </section>
        <section className={styles.features}>
          <div className={styles.featuresTitle}>
            <h1 className={styles.Title}>Features</h1>
            <ul className={styles.topics}>
                <li><span className={styles.bull}>&bull;</span>Species Echinocereus spp.</li>
                <li><span className={styles.bull}>&bull;</span>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
                <li><span className={styles.bull}>&bull;</span>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
                <li><span className={styles.bull}>&bull;</span>Pot Size: Avaliable in various pot sizes to suit your preference and needs</li>
            </ul>
          </div>
        </section>
        <section className={styles.description}>
          <div className={styles.descriptionTitle}>
            <h1 className={styles.Title}>Description</h1>
            <p className={styles.descriptionContent}>{textoComAspas}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardMoreAboutPlant