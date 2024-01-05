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
      
      if (screenWidth <= 330) {
        setSlidesPerView(1)
      }  else if (screenWidth <= 520) {
        setSlidesPerView(1.4)
      } else if (screenWidth <= 590) {
        setSlidesPerView(1.6)
      } else if (screenWidth <= 805) {
        setSlidesPerView(1.8)
      } else if (screenWidth <= 840) {
        setSlidesPerView(2.4)
      } else if (screenWidth <= 904) {
        setSlidesPerView(2.5)
      } else if (screenWidth <= 970) {
        setSlidesPerView(2.7)
      } else if (screenWidth <= 1150) {
        setSlidesPerView(2.9)
      } else if (screenWidth <= 1200) {
        setSlidesPerView(3.4);
      } else if (screenWidth <= 1300) { 
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
          spaceBetween={50}
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
