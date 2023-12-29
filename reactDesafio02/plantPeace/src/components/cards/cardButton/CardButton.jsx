import React from "react";
import style from "./CardButton.module.css";

const CardButton = ({label}) => {
    return <button className={style.button}>{label}</button>
}

export default CardButton;