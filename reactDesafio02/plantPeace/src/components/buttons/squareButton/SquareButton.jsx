import styles from "./SquareButton.module.css"
import PropTypes from 'prop-types'

const SquareButton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.squareButton}>Register</button>
    </div>
  )
}

SquareButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SquareButton