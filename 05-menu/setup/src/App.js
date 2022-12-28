import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [ dishes, setDishes ] = useState(items)
  const [ currentDishes, setCurrentDishes ] = useState(items)

  const filterMenu = category => {
    const filteredMenu = dishes.filter(dish => dish.category === category)
    setCurrentDishes(prevState => category === "all" ? items : filteredMenu)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories dishes={dishes} filterMenu={filterMenu} />
        <Menu dishes={currentDishes} />
      </section>
    </main>

  )
}

export default App;
