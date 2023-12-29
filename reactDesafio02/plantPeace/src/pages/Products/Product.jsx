import PropTypes from 'prop-types'
import styles from "./Products.module.css"
import SquareButton from '../../components/buttons/squareButton/SquareButton';

export default function Product ({ plants }) {
    return (
        <li className={styles.undProducts}>
            <img src={`src/${plants.imgUrl}`} alt={plants.name} />
            <h1>{plants.name}</h1>
            <h2>{plants.subtitle}</h2>
            <p>{plants.price}</p>
            <div className={styles.buttonProducts}>
                <SquareButton title={"More"} />
            </div>
        </li>
    )
}

Product.propTypes = {
    plants: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };