import React, { useState } from 'react';
import data from './data';

function App() {
  const [ text, setText ] = useState(data)
  const [ content, setContent ] = useState([])

  const [ numberOfText, setNumberOfText ] = useState('')

  const handleChange = e => {
    setNumberOfText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let arrayOfText = []
    for (let i = 0; i < numberOfText; i++) {
      arrayOfText.push(text[ i ])
    }
    setContent(arrayOfText)
  }

  const result = content.map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (

    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input type="number" name="amount" id="amount" value={numberOfText} onChange={handleChange} />
        <button className='btn'>Generate</button>
      </form>
      <article className="lorem-text">
        {result}
      </article>
    </section>
  )
}

export default App;
