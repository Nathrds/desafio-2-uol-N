import styles from "./Products.module.css"

import { useState, useEffect } from "react"
import Product from "./Product"

const Products = () => {
  const [ loadedProducts, setLoadedProducts] = useState ([])

  useEffect ( () => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/plants")
      if (!response.ok) {
        throw new Error("Failed, please try again later.")
      }

      const listProducts = await response.json()
      setLoadedProducts(listProducts)
    }

    fetchProducts()
  }, [])

  return (
    <div className={styles.allcontainer}>
      <h1 className={styles.allcontainerH1}>Choose the plant that interests you and click on button to learn more about it</h1>
      <ul className={styles.allProducts}>
        {loadedProducts.map((plants) => (
          <Product key={plants.id} plants={plants} />
          ))}
      </ul>
    </div>
  )
}

export default Products
