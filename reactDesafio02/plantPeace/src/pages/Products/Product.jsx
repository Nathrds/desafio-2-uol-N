import PropTypes from 'prop-types'

export default function Product ({ plants }) {
    return (
        <li>
            <img src={`src/${plants.imgUrl}`} alt={plants.name} />
            <h1>{plants.name}</h1>
            <h2>{plants.subtitle}</h2>
            <p>{plants.price}</p>
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