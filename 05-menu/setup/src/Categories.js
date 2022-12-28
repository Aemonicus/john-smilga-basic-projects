import React, { useState, useEffect } from 'react';

const Categories = ({ dishes, filterMenu }) => {
  const [ category, setCategory ] = useState([])

  const filterCategory = () => {
    const categoryList = dishes.map(item => item.category)

    const filteredCategory = categoryList.filter((item, index) => categoryList.indexOf(item) === index)
    const finalCategory = [ "all", ...filteredCategory ]

    setCategory(prevState => finalCategory)
  }

  useEffect(() => {
    filterCategory()
  }, [])

  return (
    <div className="btn-container">
      {category.map(categoryItem => <button key={categoryItem} type="button" className="filter-btn" onClick={() => filterMenu(categoryItem)}>{categoryItem}</button>)}
    </div>
  )
};

export default Categories;
