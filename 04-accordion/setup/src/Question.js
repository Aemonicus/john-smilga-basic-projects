import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, title, info }) => {
  const [ isClosed, setIsClosed ] = useState(true)

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsClosed(prevState => !isClosed)}>
          {isClosed ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!isClosed && <p>{info}</p>}
    </article>
  )
};

export default Question;
