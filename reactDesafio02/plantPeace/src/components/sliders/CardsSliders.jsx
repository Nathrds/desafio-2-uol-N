
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardsSlider = ({ data }) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        {data.map((plant, index) => (
          <PlantCard key={index} model={plant} />
        ))}
      </Slider>
    );
  };

  export default CardsSlider;