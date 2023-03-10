import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from "./context"

const Navbar = () => {
  const { sublinks, toggleSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)

  const displaySubmenu = e => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = e => {
    if (!e.target.classList.contains("link-btn")) closeSubmenu()
  }

  return <nav className="nav" onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" className="nav-logo" />
        <button className="btn toggle-btn" onClick={toggleSidebar}><FaBars /></button>
      </div>
      <ul className="nav-links">
        {sublinks.map(link => <li key={link.page}><button className="link-btn" onMouseOver={displaySubmenu}>{link.page}</button></li>)}
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
  </nav>
}

export default Navbar
