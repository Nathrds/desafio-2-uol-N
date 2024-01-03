import { Swiper, SwiperSlide } from 'swiper/react';
import PlantCard from '../cards/card/PlantCard';
import { useState, useEffect } from 'react';
import styles from './CardsSliders.module.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardsSlider = ({ discount }) => {
  const [loadedPlants, setLoadedPlants] = useState([]);
  const [productsWithDiscount, setProductsWithDiscount] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/plants");
      if (!response.ok) {
        console.log("ERROR");
      }

      const listProducts = await response.json();
      const slicedLoadedPlants = listProducts.slice(0, 10);
      const slicedProductsWithDiscount = listProducts.filter(item => item.discountPercentage !== 0).slice(0, 10);

      setLoadedPlants(slicedLoadedPlants);
      setProductsWithDiscount(slicedProductsWithDiscount);
    }

    fetchProducts();
  }, []);

  return (
    <>
      {loadedPlants.length > 0 &&
        <Swiper
          slidesPerView={3.8}
          className={styles.slide}
          spaceBetween={50}
          pagination={{ clickable: true }}
          grabCursor={true}
          scrollbar={true}
        >
          {!discount
            ? loadedPlants.map((item) => (
              <SwiperSlide key={item.id}>
                <PlantCard model={item} discount={discount} />
              </SwiperSlide>
            ))
            : productsWithDiscount.map((item) => (
              <SwiperSlide key={item.id}>
                <PlantCard model={item} discount={discount} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
      {!loadedPlants.length && <p>VAZIO</p>}
    </>
  );
};

export default CardsSlider;
