import React, { useContext, useReducer, useEffect } from 'react'
import { reducer } from './reducer'
import { useFetch } from './useFetch'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const AppContext = React.createContext()

const url = 'https://course-api.com/react-useReducer-cart-project'

const defaultState = {
  cart: [],
  totalAmount: 0,
  totalItems: 0,
  error: false,
  errorMessage: "",
  loading: true,
  clearCart: () => { },
  removeItem: () => { },
  increase: () => { },
  decrease: () => { }
}

const AppProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, defaultState)

  state.clearCart = () => dispatch({ type: "CLEAR_CART" })
  state.removeItem = id => dispatch({ type: "REMOVE_ITEM", payload: id })
  state.increase = id => dispatch({ type: "INCREASE", payload: id })
  state.decrease = id => dispatch({ type: "DECREASE", payload: id })

  const { loadingData, errorData, products } = useFetch(url)

  useEffect(() => {
    if (!loadingData) dispatch({ type: "LOADING_FALSE" })
    dispatch({ type: "LOADING_CART", payload: products })
    if (errorData) dispatch({ type: "ERROR", payload: errorData })
  }, [ products ])


  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
