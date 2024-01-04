import styles from "../AboutUs-person.module.css"

import PropTypes from "prop-types";

const Vinicius = ({model}) => {
    return (
        <section className={styles.containerVinicius}>
            <div className={styles.container}>
                <section className={styles.sectionContent}>
                    <div>
                        <h1 className={styles.sectionContent_H1}>{model.name}</h1>
                        <p className={styles.sectionContent_P}>{model.description}</p>
                    </div>
                </section>
                <section className={styles.sectionImg}>
                    <img className={styles.sectionImg_IMG} src={`src/${model.imgMe}`} alt={model.name} />
                </section>
            </div>
        </section>
    )
}

Vinicius.propTypes = {
    model: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgMe: PropTypes.string.isRequired,
    }).isRequired,
};

export default Vinicius;