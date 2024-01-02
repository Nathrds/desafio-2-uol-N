import styles from "./SquareButton.module.css"
import PropTypes from 'prop-types'


const SquareButton = ({title}) => {
  return (
    <div className={styles.containerButton}>
      <button className={styles.squareButton}>{title}</button>
    </div>
  )
}

SquareButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SquareButton