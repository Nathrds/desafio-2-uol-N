import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import PlantCard from '../cards/card/PlantCard';
import styles from './CardsSliders.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const CardsSlider = ({ discount }) => {
  const [loadedPlants, setLoadedPlants] = useState([]);
  const [productsWithDiscount, setProductsWithDiscount] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3.8);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('http://localhost:3000/plants');
      if (!response.ok) {
        console.log('ERROR');
      }

      const listProducts = await response.json();
      const slicedLoadedPlants = listProducts.slice(0, 10);
      const slicedProductsWithDiscount = listProducts
        .filter((item) => item.discountPercentage !== 0)
        .slice(0, 10);

      setLoadedPlants(slicedLoadedPlants);
      setProductsWithDiscount(slicedProductsWithDiscount);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth <= 420) {
        setSlidesPerView(1)
      } else if (screenWidth <= 450) {
        setSlidesPerView(1.2)
      } else if (screenWidth <= 490) {
        setSlidesPerView(1.3)
      }  else if (screenWidth <= 530) {
        setSlidesPerView(1.4)
      } else if (screenWidth <= 570) {
        setSlidesPerView(1.5)
      } else if (screenWidth <= 605) {
        setSlidesPerView(1.6)
      } else if (screenWidth <= 650) {
        setSlidesPerView(1.7)
      } else if (screenWidth <= 837) {
        setSlidesPerView(1.8)
      } else if (screenWidth <= 870) {
        setSlidesPerView(2.4)
      } else if (screenWidth <= 950) {
        setSlidesPerView(2.5)
      } else if (screenWidth <= 1010) {
        setSlidesPerView(2.7)
      } else if (screenWidth <= 1190) {
        setSlidesPerView(2.9)
      } else if (screenWidth <= 1230) {
        setSlidesPerView(3.4);
      } else if (screenWidth <= 1330) { 
        setSlidesPerView(3.5);
      } else {
        setSlidesPerView(3.8);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    
      {loadedPlants.length > 0 && (
        
        <Swiper
          slidesPerView={slidesPerView}
          className={styles.slide}
          spaceBetween={20}
          pagination={{ 
          clickable: true
        }}
          grabCursor={true}
        >
          {!discount
            ? loadedPlants.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/moreabout/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                  <PlantCard model={item} discount={discount} />
                </Link>   
              </SwiperSlide>         
              ))
            : productsWithDiscount.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/moreabout/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                  <PlantCard model={item} discount={discount} />
                </Link>   
              </SwiperSlide>
              ))}
        </Swiper>
      )}

      {!loadedPlants.length && <p>VAZIO</p>}
    </>
  );
};

export default CardsSlider;
