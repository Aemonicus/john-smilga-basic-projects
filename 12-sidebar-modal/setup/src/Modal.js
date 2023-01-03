import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'



const Modal = () => {

  const { modalIsOpen, toggleModal } = useContext(AppContext)
  const modalStyle = modalIsOpen ? "modal-overlay show-modal" : "modal-overlay"

  return <div className={modalStyle}>
    <div className="modal-container">
      <h3>modal content</h3>
      <button className="close-modal-btn" onClick={toggleModal}><FaTimes /></button>
    </div>
  </div>
}

export default Modal
