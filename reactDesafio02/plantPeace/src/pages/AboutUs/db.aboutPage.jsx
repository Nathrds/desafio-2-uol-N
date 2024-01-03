import styles from "./AboutUs.module.css"

import PropTypes from 'prop-types';

const AboutUs = ({aboutUs}) => {
  return (
    <div className={styles.cotainerAboutUs}>
      <img src={`src/${aboutUs.imgMe}`} alt="" />
      <div className={styles.containerInfo}>
        <h2>{aboutUs.name}</h2>
        <p>{aboutUs.city}</p>
        <p><span>Age: </span>{aboutUs.age}</p>
        <p><span>About Me: </span>{aboutUs.aboutMe}</p>
      </div>
    </div>
  )
}

AboutUs.propTypes = {
  aboutUs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired,
    imgMe: PropTypes.string.isRequired,
  }).isRequired,
}

export default AboutUs
