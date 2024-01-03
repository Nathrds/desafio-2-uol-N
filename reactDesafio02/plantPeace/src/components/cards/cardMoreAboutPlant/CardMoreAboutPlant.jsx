// import React from 'react'

import styles from './MoreAbout.module.css'

const CardMoreAboutPlant = () => {
  const textoComAspas = "Ladyfinger cactus ('Echinocereus pentalophus') is also know as Alice, Devil's Fingers, and Dog Tail, it needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak, Aphids and mealybugs are also a danger. Avoiding wet soil can help with succes with a ladyfinger cactus.";
  return (
    <div className={styles.container2}>
      <div className={styles.containerContent2}>
        <h1 className={styles.title}>Echinocereus Cactus</h1>
        <h2>A Majestic Addition to You Plant Collection</h2>
      </div>
      <div><img src="" alt="" /></div>
      <section className={styles.features}>
        <h1>Features</h1>
        <div className={styles.topics}>
          <body>
            <ul>
              <li>Species Echinocereus spp.</li>
              <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
              <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
              <li>Pot Size: Avaliable in various pot sizes to suit your preference and needs</li>
            </ul>
          </body>
        </div>
      </section>
      <section className={styles.description}>
        <h1>Description</h1>
        <div className={styles.descriptionText}>
          <body>
            <p>{textoComAspas}</p>
          </body>
        </div>
      </section>
    </div>
  )
}

export default CardMoreAboutPlant