import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [ loading, setLoading ] = useState(false)
  const [ tours, setTours ] = useState([])

  const getTours = async () => {
    setLoading(prevState => true)
    const response = await fetch(url)
    const tours = await response.json()
    setTours(prevState => tours)
    setLoading(prevState => false)
  }

  const deleteTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id)
    setTours(prevState => filteredTours)
  }

  useEffect(() => {
    getTours()
  }, [])

  return (
    <main>
      {loading && <Loading />}
      {!loading && <Tours tours={tours} deleteTour={deleteTour} getTours={getTours} />}
    </main>
  )
}

export default App
