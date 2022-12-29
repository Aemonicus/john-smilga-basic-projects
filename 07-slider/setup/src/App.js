import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [ people, setPeople ] = useState(data)
  const [ sliderStatus, setSliderStatus ] = useState([ "activeSlide", "lastSlide", "nextSlide", "nextSlide" ])

  const changeSliderStatus = (direction) => {

    const removeItem = direction === "left" ? sliderStatus.splice(sliderStatus.length - 1) : sliderStatus.splice(0, 1)
    const shorterArray = direction === "left" ? sliderStatus.slice(0, sliderStatus.length) : sliderStatus.slice(0,)
    const newArray = direction === "left" ? removeItem.concat(shorterArray) : shorterArray.concat(removeItem)

    setSliderStatus(prevState => newArray)
  }

  useEffect(() => {
    const timer = setTimeout(() => changeSliderStatus("right"), 4000)

    return () => clearTimeout(timer)
  })

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">

        {people.map((person, index) => {
          const { id, image, name, title, quote } = person

          return (
            <article key={id} className={sliderStatus[ index ]}>
              <img src={image} alt="" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}

        <button className="prev" onClick={() => changeSliderStatus("left")}><FiChevronLeft /></button>
        <button className="next" onClick={() => changeSliderStatus("right")}><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App;
