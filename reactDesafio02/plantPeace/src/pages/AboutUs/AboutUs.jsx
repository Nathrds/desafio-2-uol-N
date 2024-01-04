import styles from "./AboutUs.module.css";

import AboutPage from "./db.aboutPage";

import { useState, useEffect } from "react";

import Matheus from "../../components/aboutUs-person/Matheus/Matheus";
import Nathalia from "../../components/aboutUs-person/Nathalia/Nathalia";
import Thiago from "../../components/aboutUs-person/Thiago/Thiago";
import Vinicius from "../../components/aboutUs-person/Vinicius/Vinicius";

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
        {loadedAboutUS[0] && <Matheus model={loadedAboutUS[0]} />}
        {loadedAboutUS[1] && <Nathalia model={loadedAboutUS[1]} />}
        {loadedAboutUS[2] && <Thiago model={loadedAboutUS[2]} />}
        {loadedAboutUS[3] && <Vinicius model={loadedAboutUS[3]} />}
    </div>
  );
};

export default AboutUs;
