import style from "./PlantCard.module.css"
import CardButton from "../../buttons/cardButton/CardButton";
import PropTypes from 'prop-types';

const PlantCard = ({ model, discount }) => {

  
  let newPrice;
  let discountAmount;
  
  if (!isNaN(model.discountPercentage) && !isNaN(model.price) && model.price !== 0) {
    discountAmount = (model.discountPercentage / 100) * model.price;
    newPrice = model.price - discountAmount;
  } else {
    newPrice = 0;
  }
  
  return (
    <div className={style.container}>
      <img src={`src/${model.imgUrl}`} alt={model.name} className={style.image} />
      <div className={style.content}>
        <div className={style.textCard}>
          <h2 className={style.name}>{model.name}</h2>
          {
          discount === true 
          ? <div className={style.discountDiv}>
              <p className={style.price}>${model.price.toFixed(2)}</p>
              <p className={style.discount}>${newPrice.toFixed(2)}</p>
            </div>
          : <p className={style.price}>${model.price.toFixed(2)}</p>  
          }
        </div>
        <CardButton label={model["label"][0]}/>
      </div>
    </div>
  );
};

PlantCard.propTypes = {
  model: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    label: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlantCard;
