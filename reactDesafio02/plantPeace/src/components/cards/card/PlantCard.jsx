import React from "react";
import style from "./PlantCard.module.css";
import CardButton from "../cards/cardButton/CardButton";

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

export default PlantCard;
