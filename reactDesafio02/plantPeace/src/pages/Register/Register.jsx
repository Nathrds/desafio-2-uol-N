import styles from "./Register.module.css";
import { useState } from "react";
//import SquareButton from "../../components/buttons/squareButton/SquareButton.jsx";
import plantImage from "../../assets/img/imgDiscovery/right plant p.png";
//import { NavLink } from "react-router-dom";

const Register = () => {
  
  const [plantData, setPlantData] = useState({
    plantName: '',
    plantSubtitle: '',
    plantType: '',
    plantPrice: '',
    plantDiscount: '',
    plantLocation: 'indoor',
    features: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlantData({
      ...plantData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();[]

    const response = await fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantData),
    });

    if (response.ok) {
      console.log('Plant was registered successfully!');
    } else {
      console.error('Failed to register plant');
    }
  };

  return (
    <div className={styles.defaultContainer}>
      <form onSubmit={handleSubmit}>
        <section className={styles.formStyle}>
            <div className={styles.formContainer}> 
              
              <div className={styles.h1Style}>
                <h1>Plant registration</h1>
              </div>
              
              <span className={styles.spanStyle}>Plant name:</span>
              <input
                className={styles.inputStyle}
                type="text"
                name="plantName"
                placeholder="Echinocereus Cactus"
                value={plantData.plantName}
                onChange={handleInputChange}
              />

              <span className={styles.spanStyle}>Plant subtitle:</span>
              <input
                className={styles.inputStyle}
                type="text"
                name="plantSubtitle"
                placeholder="A majestic addition to your plant collection"
                value={plantData.plantSubtitle}
                onChange={handleInputChange}
              />

              <span className={styles.spanStyle}>Plant type:</span>
              <input
                className={styles.inputStyle}
                type="text"
                name="plantType"
                placeholder="Cactus"
                value={plantData.plantType}
                onChange={handleInputChange}
              />

              <section className={styles.priceSection}>
                <div>
                  <span className={styles.spanStyle}>Price:</span>
                  <input
                    className={styles.priceStyle}
                    type="text"
                    name="plantPrice"
                    placeholder="$139.99"
                    value={plantData.plantPrice}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <span className={styles.spanStyle}>Discount percentage:</span>
                  <input
                    className={styles.priceStyle}
                    type="text"
                    name="plantDiscount"
                    placeholder="20%"
                    value={plantData.plantDiscount}
                    onChange={handleInputChange}
                  />
                </div>
              </section>
              
              <span className={styles.spanStyle}>Label:</span>
              <section className={styles.section}>
                <label className={styles.radioStyle}>
                  <input className={styles.radioButton}
                    type="radio"
                    name="plantLocation"
                    value="indoor"
                    id="indoor"
                    checked={plantData.plantLocation === 'indoor'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="indoor" className={styles.radioText}>Indoor</label>
                </label>
                
                <label className={styles.radioStyle}>
                  <input className={styles.radioButton}
                    type="radio"
                    name="plantLocation"
                    value="outdoor"
                    id="outdoor"
                    checked={plantData.plantLocation === 'outdoor'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="outdoor" className={styles.radioText}>Outdoor</label>
                </label>
              </section>

              <span className={styles.spanStyle}>Features:</span>
              <div className={styles.textareaStyle}>
                <textarea
                  className={styles.largeTextarea}
                  name="features"
                  placeholder="Species: Echinocereus..."
                  value={plantData.features}
                  onChange={handleInputChange}
                />
              </div>
              
              <span className={styles.spanStyle}>Description:</span>
              <div className={styles.textareaStyle}>
                <textarea
                  className={styles.largeTextarea}
                  name="description"
                  placeholder="Ladyfinger cactus..."
                  value={plantData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.regButtonDiv}>
                <button type="submit" className={styles.registerButton}>
                  Register
                </button>
              </div>
            </div>
        </section>
      </form>

      <section className={styles.containerSection}>
        <div className={styles.imageContainer}>
          <img className={styles.imageStyle} src={plantImage} alt="Right plant" />
        </div>
      </section>
    </div>
  );
};

export default Register;
