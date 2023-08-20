import React from 'react'

const ReactContext = React.createContext({
  cartData: [],
  addToCartList: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  paymentSuccessful: () => {},
})

export default ReactContext
