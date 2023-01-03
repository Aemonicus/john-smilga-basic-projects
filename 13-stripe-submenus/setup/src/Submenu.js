import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from "./context"

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useContext(AppContext)
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [ location ])

  const submenuStyle = isSubmenuOpen ? "submenu show" : "submenu"

  return <aside className={submenuStyle} ref={container}>
    <section>
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>{links.map(item =>
        <a key={item.label} href={item.url}>{item.icon} {item.label}</a>)}
      </div>
    </section>
  </aside>
}

export default Submenu
