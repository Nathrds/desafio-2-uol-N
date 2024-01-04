import styles from "./Products.module.css"

import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

import SquareButton from '../../components/buttons/squareButton/SquareButton';

export default function Product ({ plants }) {
    return (
        <li className={styles.undProducts}>
            <img className={styles.undProducts_Img} src={`src/${plants.imgUrl}`} alt={plants.name} />
            <h1 className={styles.undProducts_H1}>{plants.name}</h1>
            <h2 className={styles.undProducts_H2}>{plants.subtitle}</h2>
            <p className={styles.undProducts_P}>R$ {plants.price}</p>
            <div className={styles.buttonProducts}>
            <NavLink to={`/moreabout/${plants.id}`}>
                <SquareButton title={"More"} />
            </NavLink>
            </div>
        </li>
    )
}

Product.propTypes = {
        plants: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
  };