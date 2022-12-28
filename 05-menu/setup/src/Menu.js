import React from 'react';

const Menu = ({ dishes }) => {
  return (
    <div className="section-center">
      {
        dishes.map(dish => {
          return (
            <article key={dish.id} className="menu-item">
              <img src={dish.img} alt="" className="photo" />
              <div className="item-info">
                <header>
                  <h4>{dish.title}</h4>
                  <h4 className="price">{dish.price} €</h4>
                </header>
                <p className="item-text">{dish.desc}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
};

export default Menu;
