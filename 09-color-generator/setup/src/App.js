import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [ startingColor, setCurrentColor ] = useState("rgb( 241, 80, 37 )")
  const [ newColor, setNewColor ] = useState()
  const [ allColors, setAllColors ] = useState([])
  const [ colorError, setColorError ] = useState(false)


  const handleChange = e => {
    setColorError(false)
    setNewColor(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    try {
      createPalette(newColor)
    } catch (error) {
      setColorError(true)
      alert("Code couleur au mauvais format")
      console.log(error)
    }
  }

  const createPalette = (color) => {
    const itemColor = new Values(color)

    setAllColors(itemColor.all(10))
  }


  useEffect(() => {
    createPalette(startingColor)
  }, [])

  return <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='#f15025 / rgb(255,255,255) format' value={newColor} className={colorError ? "error" : ""} onChange={handleChange} />
        <button className="btn">submit</button>
      </form>
    </section>
    <section className="colors">
      {allColors.map(item => <SingleColor key={Date.now().toString(36) + Math.random().toString(36)} {...item} rgbString={item.rgbString()} hexString={item.hexString()} />)}
    </section>
  </>
}

export default App
