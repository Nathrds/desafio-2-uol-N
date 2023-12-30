import { Swiper, SwiperSlide } from 'swiper/react';
import PlantCard from '../cards/card/PlantCard';
import { useState, useEffect } from 'react';
import styles from './CardsSliders.module.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardsSlider = ({discount}) => {
  const [loadedPlants, setLoadedPlants] = useState([])

  useEffect (() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/plants")
      if (!response.ok) {
        console.log("ERROR")
      }

      const listProducts = await response.json();
      setLoadedPlants(listProducts);
      
    }
    fetchProducts()
  }, []);

  return (
    <>
    {loadedPlants.length && 
    <Swiper 
    slidesPerView={3.8}
    className={styles.slide} 
    spaceBetween={70} 
    pagination={{clickable: true}}
    grabCursor={true}
    scrollbar={true}
    >
      {loadedPlants.map((item) => (
        <SwiperSlide key={item.id}>
          <PlantCard model={item} discount={discount}/>
        </SwiperSlide>
      ))}
    </Swiper>
    }
    {!loadedPlants.length && <p>VAZIO</p>}
    </>
    
  );
};

export default CardsSlider;