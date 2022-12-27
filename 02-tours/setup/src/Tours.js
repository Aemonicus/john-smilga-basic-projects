import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, deleteTour, getTours }) => {

  return (
    <section>
      <div className="title">
        {tours.length > 0 ? <h2>Our Tours</h2> : <h2>No Tours Left</h2>}
        {tours.length > 0 && <div className="underline"></div>}
        {tours.length === 0 && <button className='btn' onClick={getTours}>Refresh</button>}
      </div>
      <div className="tours">
        {tours.map(tour => <Tour key={tour.id} tour={tour} deleteTour={deleteTour} getTours={getTours} />)}
      </div>
    </section>
  )
};

export default Tours;
