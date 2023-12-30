//import styles from "./AboutUs.module.css"

import AboutPage from "./db.aboutPage"
import { useState, useEffect } from "react"


const AboutUs = () => {
  const [ loadedAboutUS, setLoadedAboutUs] = useState ([])

  useEffect ( () => {
    async function fetchAboutUs() {
      const response = await fetch("http://localhost:3000/aboutUs")
      if (!response.ok) {
        throw new Error("Failed, please try again later.")
      }

      const listAboutPage = await response.json()
      setLoadedAboutUs(listAboutPage)
    }

    fetchAboutUs()
  }, [])

  return (
    <ul>
      {loadedAboutUS.map((aboutUs) => (
        < AboutPage key={aboutUs.id} aboutUs={aboutUs}/>
      ))}
    </ul>
  )
}

export default AboutUs