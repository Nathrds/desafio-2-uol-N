import styles from "../AboutUs-person.module.css"

import PropTypes from "prop-types";

const Thiago = ({model}) => {
    return (
        <sectin className={styles.containerThiago}>
            <div className={styles.container}>
                <section className={styles.sectionImg}>
                    <img src={`src/${model.imgMe}`} alt={model.name} />
                </section>
                <section className={styles.sectionContent}>
                    <div>
                        <h1>{model.name}</h1>
                        <p>{model.description}</p>
                    </div>
                </section>
            </div>
        </sectin>
    )
}

Thiago.propTypes = {
    model: PropTypes.shape({
      imgMe: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Thiago;