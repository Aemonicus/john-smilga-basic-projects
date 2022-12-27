import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  // // TEACHER VERSION
  // const [ index, setIndex ] = useState(0);
  // const { name, job, image, text } = people[ index ];
  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };
  // const nextPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const prevPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * people.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   setIndex(checkNumber(randomNumber));
  // };


  const [ peopleData, setPeopleData ] = useState(people)
  const [ currentPerson, setCurrentPerson ] = useState({ ...peopleData[ 0 ] })

  const changePrevPeople = id => {
    const newPerson = id > 1 ? peopleData.find(person => person.id === id - 1) : peopleData[ 3 ]
    setCurrentPerson(prevState => newPerson)
  }

  const changeNextPeople = id => {
    const newPerson = id < 4 ? peopleData.find(person => person.id === id + 1) : peopleData[ 0 ]
    setCurrentPerson(prevState => newPerson)
  }

  const randomPeople = () => {
    const index = Math.floor(Math.random() * 4)
    const newPerson = peopleData[ index ]
    setCurrentPerson(prevState => newPerson)
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={currentPerson.image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{currentPerson.name}</h4>
      <p className="job">{currentPerson.job}</p>
      <p className="info">{currentPerson.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => changePrevPeople(currentPerson.id)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => changeNextPeople(currentPerson.id)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPeople}>Surprise Me</button>
    </article>
  )
};

export default Review;
