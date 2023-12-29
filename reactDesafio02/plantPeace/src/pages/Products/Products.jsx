import styles from "./Products.module.css"

import { useState, useEffect } from "react"
import Product from "./Product"

const Products = () => {
  const [ loadedProducts, setLoadedProducts] = useState ([])

  useEffect ( () => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/plants")
      if (!response.ok) {
        console.log("ERROR")
      }

      const listProducts = await response.json()
      setLoadedProducts(listProducts)
    }

    fetchProducts()
  }, [])

  return (
    <ul className={styles.allProducts}>
      {loadedProducts.map((plants) => (
        <Product key={plants.id} plants={plants} />
      ))}
    </ul>
  )
}

export default Products