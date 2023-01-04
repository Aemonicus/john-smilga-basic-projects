export const reducer = (state, action) => {
  if (action.type === "LOADING_FALSE") {
    return {
      ...state,
      loading: false
    }
  }

  if (action.type === "LOADING_TRUE") {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
      errorMessage: action.payload
    }
  }

  if (action.type === "LOADING_CART") {
    const newCart = action.payload
    const newTotalItems = newCart.reduce((total, item) => item.amount + total, 0)
    const newTotalAmount = newCart.reduce((total, item) => (+item.price * item.amount) + total, 0)
    return {
      ...state,
      cart: newCart,
      totalItems: newTotalItems,
      totalAmount: newTotalAmount
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter(item => item.id !== action.payload)
    const newTotalAmount = newCart.reduce((total, item) => (+item.price * item.amount) + total, 0)
    return {
      ...state,
      cart: newCart,
      totalAmount: newTotalAmount
    }
  }
  if (action.type === "INCREASE") {
    const newCart = state.cart.map(item => {
      if (item.id === action.payload) {
        let amount = item.amount + 1
        return { ...item, amount }
      }
      return item
    })

    const newTotalItems = newCart.reduce((total, item) => item.amount + total, 0)
    const newTotalAmount = newCart.reduce((total, item) => (+item.price * item.amount) + total, 0)
    return {
      ...state,
      cart: newCart,
      totalItems: newTotalItems,
      totalAmount: newTotalAmount
    }
  }

  if (action.type === "DECREASE") {
    const newCart = state.cart.map(item => {
      if (item.id === action.payload) {
        let amount = item.amount - 1
        return { ...item, amount }
      }
      return item
    })

    const removeItem = newCart.filter(item => {
      if (item.id === action.payload) return item.amount >= 0

      return item
    })

    const newTotalItems = removeItem.reduce((total, item) => item.amount + total, 0)
    const newTotalAmount = removeItem.reduce((total, item) => (+item.price * item.amount) + total, 0)
    return {
      ...state,
      cart: removeItem,
      totalItems: newTotalItems,
      totalAmount: newTotalAmount
    }
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
      totalAmount: 0
    }
  }

  throw new Error("no matching action type")
}