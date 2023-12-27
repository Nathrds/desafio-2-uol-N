import styles from "./SquareButton.module.css"

const SquareButton = (title) => {
  return (
    <button className={styles.colorButton}>{title}</button>
  )
}

export default SquareButton;