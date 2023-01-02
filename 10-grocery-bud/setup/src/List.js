import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ title, id, onDelete, onEdit }) => {

  return <article className="grocery-item">
    <p className="title">{title}</p>
    <div className="btn-container">
      <button className='edit-btn'><FaEdit onClick={() => onEdit(id)} /></button>
      <button className='delete-btn'><FaTrash onClick={() => onDelete(id)} /></button>
    </div>
  </article>
}

export default List
