import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from "./context"

const Sidebar = () => {
  const { isSidebarOpen, sublinks, toggleSidebar } = useContext(AppContext)

  const sidebarStyles = isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"

  return <div className={sidebarStyles}>
    <aside className="sidebar">
      <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
      <div className="sidebar-links">
        {sublinks.map(link =>
          <article key={link.page}>
            <h4>{link.page}</h4>
            <div className="sidebar-sublinks">{link.links.map(item =>
              <a key={item.label} href={item.url}>{item.icon} {item.label}</a>)}
            </div>
          </article>)}
      </div>
    </aside>
  </div>
}
export default Sidebar
