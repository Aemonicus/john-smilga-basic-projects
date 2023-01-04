import { useEffect, useState } from "react"

export const useFetch = url => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ products, setProducts ] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch(url)
      const products = await response.json()

      if (!response.ok) throw new Error

      setProducts(products)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setProducts([])
      setError("something went wrong with the data fetching")
    }
  }

  useEffect(() => {
    getProducts()
  }, [ url ])

  return { loading, error, products }
}