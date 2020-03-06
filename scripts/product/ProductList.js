import { useProducts } from "./productDataProvider.js"
import products from "./Product.js"


const contentTarget = document.querySelector(".product")

const productList = () => {

    const productArray = useProducts()

    for (const productObject of productArray) {

      const htmlRepOfProduct = products(productObject)

      contentTarget.innerHTML += htmlRepOfProduct
    }

  }
  
  export default productList