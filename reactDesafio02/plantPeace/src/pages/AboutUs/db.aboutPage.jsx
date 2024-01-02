import styles from "./AboutUs.module.css"

import PropTypes from 'prop-types';

const AboutUs = ({aboutUs}) => {
  return (
    <div className={styles.cotainerAboutUs}>
      <h2>{aboutUs.name}</h2>
      <p>{aboutUs.age}</p>
      <p>{aboutUs.city}</p>
      <p>{aboutUs.aboutMe}</p>
    </div>
  )
}

AboutUs.propTypes = {
  aboutUs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
  }).isRequired,
}

export default AboutUs
