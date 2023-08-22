import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ReactContext from './components/ReactContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import RestaurantDetails from './components/RestaurantDetails'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import './App.css'

let list = JSON.parse(localStorage.getItem('cartData'))

if (list === null) {
  list = []
}

class App extends Component {
  state = {cartData: list}

  addToCartList = item => {
    this.setState(prev => ({cartData: [...prev.cartData, item]}))
  }

  increaseQuantity = id => {
    const {cartData} = this.state
    const newList = cartData.map(each =>
      each.id === id ? {...each, quantity: each.quantity + 1} : each,
    )
    this.setState({cartData: newList})
  }

  decreaseQuantity = id => {
    const {cartData} = this.state
    const newObject = cartData.find(each => each.id === id)

    if (newObject.quantity > 1) {
      this.setState(prev => ({
        cartData: prev.cartData.map(each => {
          if (each.id === id) {
            return {...each, quantity: each.quantity - 1}
          }
          return each
        }),
      }))
    } else {
      this.removeItem(id)
    }
  }

  removeItem = id => {
    const {cartData} = this.state
    const newList = cartData.filter(each => each.id !== id)

    this.setState({cartData: newList})
  }

  paymentSuccessful = () => {
    this.setState({cartData: []})
  }

  render() {
    const {cartData} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartData))

    return (
      <ReactContext.Provider
        value={{
          cartData,
          addToCartList: this.addToCartList,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
          paymentSuccessful: this.paymentSuccessful,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
