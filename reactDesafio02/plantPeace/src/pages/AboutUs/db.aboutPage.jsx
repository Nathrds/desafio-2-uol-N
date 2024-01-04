import styles from "./AboutUs.module.css"

import PropTypes from 'prop-types';

const AboutUs = ({aboutUs}) => {
  return (
    <div className={styles.cotainerAboutUs}>
      <img className={styles.cotainerAboutUs_Img} src={`src/${aboutUs.imgMe}`} alt="" />
      <div className={styles.containerInfo}>
        <h2 className={styles.containerInfo_H2}>{aboutUs.name}</h2>
        <p className={styles.containerInfo_P}>{aboutUs.city}</p>
        <p className={styles.containerInfo_P}><span className={styles.infoSpan}>Age: </span>{aboutUs.age}</p>
        <p className={styles.containerInfo_P}><span className={styles.infoSpan}>About Me: </span>{aboutUs.aboutMe}</p>
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
