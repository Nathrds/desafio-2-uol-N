import styles from "./SquareButton.module.css"
import PropTypes from 'prop-types'

const SquareButton = ({title}) => {
  return (
    <button className={styles.squareButton}>{title}</button>
  )
}

SquareButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SquareButton