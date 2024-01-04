import React, { useEffect, useState } from 'react';
import styles from './MoreAbout.module.css';
import { NavLink, useParams } from 'react-router-dom';

import SquareButton from '../../buttons/squareButton/SquareButton';
import CardButton from '../../buttons/cardButton/CardButton';

const CardMoreAboutPlant = () => {
  const { id } = useParams();
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {

    const fetchPlantDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/plants/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch plant details');
        }
        const data = await response.json();
        setPlantData(data);
      } catch (error) {
        console.error('Error fetching plant details:', error.message);
      }
    };

    fetchPlantDetails();
  }, [id]);

  if (!plantData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.container2}>
      <div className={styles.image}>
        <img className={styles.ImagePlant} src={`/src/${plantData.imgUrl}`} alt={plantData.name} />
      </div>
      <div className={styles.containerContent2}>
        <h1 className={styles.title}>{plantData.name}</h1>
        <h2>{plantData.subtitle}</h2>
        <section className={styles.label}>
          {plantData.label.map((label, index) => (
            <CardButton key={index} label={label} />
          ))}
        </section>
        <h2 className={styles.price}>${plantData.price}</h2>
        <section className={styles.button}>
          <a href={plantData.link} target="_blank" rel="noopener noreferrer">
            <SquareButton title="Check out" />
          </a>
        </section>
        <section className={styles.features}>
          <div className={styles.featuresTitle}>
            <h1 className={styles.Title}>Features</h1>
            <ul className={styles.topics}>
              {plantData.features.split('\n').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.description}>
          <div className={styles.descriptionTitle}>
            <h1>Description</h1>
            <p className={styles.descriptionContent}>{plantData.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardMoreAboutPlant;