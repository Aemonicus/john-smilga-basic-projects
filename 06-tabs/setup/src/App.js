import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ listIndex, setListIndex ] = useState(0)

  const loaded = data.length > 0

  const changeCompany = id => {
    setListIndex(prevState => id)
  }

  const getData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()

      if (response.ok) {
        setData(data)
        setLoading(false)
      } else {
        throw new Error
        setLoading(false)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="section">
      <div className="title">
        {error && <h2>{error}</h2>}
        {!error && !loading && <h2>Experience</h2>}
        {loading && <h2>Loading...</h2>}
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {loaded && data.map((item, index) => <button key={item.id} className={listIndex === index ? "job-btn active-btn" : "job-btn false"} onClick={() => changeCompany(index)}>{item.company}</button>)}
        </div>
        <article className="job-info">
          {loaded && <h3>{data[ listIndex ].title}</h3>}
          {loaded && <h4>{data[ listIndex ].company}</h4>}
          {loaded && <p className="job-date">{data[ listIndex ].dates}</p>}
          {loaded && data[ listIndex ].duties.map((item, index) =>
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className='job-icon' />
              <p>{item}</p>
            </div>
          )}
        </article>
      </div>
      <button className="btn">More Info</button>
    </section >
  )
}

export default App
