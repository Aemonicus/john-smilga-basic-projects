import React, { useState } from 'react';

const Tour = ({ tour, deleteTour }) => {
  const { id, name, info, image, price } = tour
  const [ readMore, setReadMore ] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt="image" />
      <div className="tour-info">
        <span className="tour-price">{price} €</span>
        <h4>{name}</h4>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : " read more"}</button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>Not Interested</button>
      </div>
    </article>
  );
};

export default Tour;
