import style from "./PlantCard.module.css";
import CardButton from "../../buttons/cardButton/CardButton";

import PropTypes from 'prop-types';

const PlantCard = ({ model }) => {
  return (
    <div className={style.container}>
      <img src={model.imgUrl} alt={model.name} className={style.image} />
      <div className={style.content}>
        <h2 className={style.name}>{model.name}</h2>
        <p className={style.price}>{model.price}</p>
        <CardButton label={model["label"][0]}/>
      </div>
    </div>
  );
};

PlantCard.propTypes = {
  model: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    label: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlantCard;
