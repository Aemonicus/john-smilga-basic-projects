import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [ dishes, setDishes ] = useState(items)

  const filterMenu = category => {
    const filteredMenu = items.filter(item => item.category === category)
    setDishes(prevState => category === "all" ? items : filteredMenu)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories dishes={dishes} filterMenu={filterMenu} />
        <Menu dishes={dishes} />
      </section>
    </main>

  )
}

export default App;
