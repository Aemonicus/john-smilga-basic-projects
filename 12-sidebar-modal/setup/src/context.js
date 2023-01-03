import React, { useState, useContext } from 'react'

export const AppContext = React.createContext()

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [ sidebarIsOpen, setSidebarIsOpen ] = useState(false)
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const toggleModal = () => setModalIsOpen(!modalIsOpen)
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

  return (
    <AppContext.Provider value={{ sidebarIsOpen, modalIsOpen, toggleModal, toggleSidebar }} >
      {children}
    </AppContext.Provider>
  )
}