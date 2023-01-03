import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const { toggleModal, toggleSidebar } = useContext(AppContext)

  return <main>
    <button className="sidebar-toggle" onClick={toggleSidebar}><FaBars /></button>
    <button className="btn" onClick={toggleModal}>show modal</button>
  </main>
}

export default Home
