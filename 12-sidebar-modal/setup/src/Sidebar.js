import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'


const Sidebar = () => {

  const { sidebarIsOpen, toggleSidebar } = useContext(AppContext)
  const asideStyle = sidebarIsOpen ? "sidebar show-sidebar" : "sidebar"

  return <aside className={asideStyle}>
    <div className="sidebar-header">
      <img src={logo} alt="coding addict" className="logo" />
      <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
    </div>
    <ul className='links'>
      {links.map(link => <li key={link.id}><a href={link.url}>{link.icon}{link.text}</a></li>)}
    </ul>
    <ul className="social-icons">
      {social.map(item => <li key={item.id}><a href={item.url}>{item.icon}</a></li>)}
    </ul>
  </aside>
}

export default Sidebar
