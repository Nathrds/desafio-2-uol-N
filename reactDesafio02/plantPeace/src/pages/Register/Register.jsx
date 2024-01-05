import styles from "./Register.module.css";
import { useState } from "react";
import plantImage from "../../assets/img/imgDiscovery/right plant p.png";

const Register = () => {
  
  const [plantData, setPlantData] = useState({
    name: '',
    subtitle: '',
    typle: '',
    price: '',
    discountPercentage: '',
    label: 'indoor',
    features: '',
    description: '',
    imgUrl: "assets/modernPicture1.png",
    link: "https://www.gardenia.net/plants/plant-types"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "name" && /[^A-Za-z.,; ]/.test(value)) {
    alert("This field cannot contain numbers or special characters!");
    return;
  }

  if (name === "subtitle" && /[^A-Za-z.,; ]/.test(value)) {
    alert("This field cannot contain numbers or special characters!");
    return;
  }

  if (name === "typle" && /[^A-Za-z.,; ]/.test(value)) {
    alert("This field cannot contain numbers or special characters!");
    return;
  }
  
  if (name === "price") {
    const priceRegex = /^[0-9]+(\.[0-9]*)?$/;
    if (value !== "" && !priceRegex.test(value)) {
      alert("You need to put in the current format. EX: 139.99");
      return;
    }
  }
  
   if (name === "discountPercentage") {
    const discountRegex = /^[0-9]+%?$/;
    if (value !== "" && !discountRegex.test(value)) {
      alert("You need to put in percentage format. EX: 10%");
      return;
    }
  }
  
    setPlantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      alert("Plant was registered successfully!");

      setPlantData({
        name: '',
        subtitle: '',
        typle: '',
        price: '',
        discountPercentage: '',
        label: 'indoor',
        features: '',
        description: '',
        imgUrl: "assets/modernPicture1.png",
        link: "https://www.gardenia.net/plants/plant-types"
      });
    } else {
      alert("Failed to register plant!");
      return
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
                type="name"
                name="plantName"
                placeholder="Echinocereus Cactus"
                required
                value={plantData.plantName}
                onChange={handleInputChange}
              />

              <span className={styles.spanStyle}>Plant subtitle:</span>
              <input
                className={styles.inputStyle}
                type="subtitle"
                name="plantSubtitle"
                placeholder="A majestic addition to your plant collection"
                required
                value={plantData.plantSubtitle}
                onChange={handleInputChange}
              />

              <span className={styles.spanStyle}>Plant type:</span>
              <input
                className={styles.inputStyle}
                type="type"
                name="plantType"
                placeholder="Cactus"
                required
                value={plantData.plantType}
                onChange={handleInputChange}
              />

              <section className={styles.priceSection}>
                <div>
                  <span className={styles.spanStyle}>Price:</span>
                  <input
                    className={styles.priceStyle}
                    type="price"
                    name="plantPrice"
                    placeholder="$139.99"
                    required
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
              <section className={styles.section} >
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
                  required
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