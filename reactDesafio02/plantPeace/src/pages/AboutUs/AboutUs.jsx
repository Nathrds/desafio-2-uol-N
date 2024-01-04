import styles from "./AboutUs.module.css";
import Thiago from "../../components/Thiago/Thiago";
import AboutPage from "./db.aboutPage";
import { useState, useEffect } from "react";
import Nathalia from "../../components/Nathalia/Nathalia";
import Matheus from "../../components/Matheus/Matheus";

const AboutUs = () => {
  const [loadedAboutUS, setLoadedAboutUs] = useState([]);

  useEffect(() => {
    async function fetchAboutUs() {
      const response = await fetch("http://localhost:3000/aboutUs");
      if (!response.ok) {
        throw new Error("Failed, please try again later.");
      }

      const listAboutPage = await response.json();
      setLoadedAboutUs(listAboutPage);
    }

    fetchAboutUs();
  }, []);

  return (
    <div>
      <ul className={styles.containerAboutPage}>
        {loadedAboutUS.map((aboutUs) => (
          <AboutPage key={aboutUs.id} aboutUs={aboutUs} />
        ))}
      </ul>
      {loadedAboutUS[1] && <Matheus model={loadedAboutUS[1]} />}
      {loadedAboutUS[0] && <Nathalia model={loadedAboutUS[0]} />}
      {loadedAboutUS[2] && <Thiago model={loadedAboutUS[2]} />}
    </div>
  );
};

export default AboutUs;
