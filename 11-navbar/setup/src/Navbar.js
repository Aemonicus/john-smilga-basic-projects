import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const handleToggle = () => {
    setToggle(!toggle)
  }


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (toggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [ toggle ])

  // const styles = toggle ? "links-container show-container" : "links-container"

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" className="logo" />
        <button className="nav-toggle" onClick={handleToggle}><FaBars /></button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map(item => <li key={item.id}><a href={item.url}>{item.text}</a></li>)}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(item => <li key={item.id}><a href={item.url}>{item.icon}</a></li>)}
      </ul>
    </div>
  </nav>
}

export default Navbar
