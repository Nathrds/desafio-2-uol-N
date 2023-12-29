import style from "./CardButton.module.css";
import PropTypes from 'prop-types';

const CardButton = ({label}) => {
    return <button className={style.button}>{label}</button>
}

CardButton.propTypes = {
    label: PropTypes.string.isRequired, 
};

export default CardButton;