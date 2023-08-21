import {withRouter} from 'react-router-dom'
import {Component} from 'react'

import {BiRupee} from 'react-icons/bi'
import ReactContext from '../ReactContext'
import CartItem from '../CartItem'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

class CartList extends Component {
  state = {orderPlaced: false}

  orderNow = () => {
    const {history} = this.props
    history.replace('/')
  }

  noOrdersView = () => (
    <div className="no-orders-container">
      <img
        className="no-orders-image"
        src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/cooking%201.png?updatedAt=1692162574636"
        alt="empty cart"
      />
      <h1 className="no-orders-heading">No Orders Yet!</h1>
      <p className="no-orders-desc">
        Your cart is empty. Add something from the menu.
      </p>
      <button
        type="button"
        className="order-now-button"
        onClick={this.orderNow}
      >
        Order Now
      </button>
    </div>
  )

  getCartListItems = () => (
    <ReactContext.Consumer>
      {value => {
        const {cartData, paymentSuccessful} = value

        let totalBill = 0
        cartData.forEach(each => {
          totalBill += each.cost * each.quantity
        })

        const updatePlaceOrder = () => {
          paymentSuccessful()
          this.setState({orderPlaced: true})
        }
        return (
          <div className="add-items-list">
            <div className="cart-list-order">
              <p className="items-price">Items</p>
              <p className="items-price-quantity">Quantity</p>
              <p className="items-price">Price</p>
            </div>
            <ul className="cart-items-list">
              {cartData.map(each => (
                <CartItem key={each.id} item={each} />
              ))}
            </ul>
            <hr className="cart-line" />
            <div className="total-bill-card">
              <div className="order-card">
                <p className="order">Order:</p>
                <p className="order">
                  <BiRupee />
                  <span>{totalBill}</span>
                </p>
              </div>
              <button
                className="place-order-button"
                type="button"
                onClick={updatePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        )
      }}
    </ReactContext.Consumer>
  )

  cartView = () => (
    <ReactContext.Consumer>
      {value => {
        const {cartData} = value
        const noItems = cartData.length !== 0

        return (
          <div>
            <Navbar />
            <div className="complete-cart-container">
              {noItems ? this.getCartListItems() : this.noOrdersView()}
            </div>
            <Footer />
          </div>
        )
      }}
    </ReactContext.Consumer>
  )

  placeOrder = () => (
    <>
      <Navbar />
      <div className="payment-cart">
        <img
          src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Vector.png?updatedAt=1692451066977"
          alt="vector"
          className="vector"
        />
        <h1 className="payment-heading">Payment Successful</h1>
        <p className="payment-desc">
          Thank you for ordering Your payment is successfully completed.
        </p>
        <button
          type="button"
          className="go-to-home-button"
          onClick={this.orderNow}
        >
          Go To Home Page
        </button>
      </div>
    </>
  )

  render() {
    const {orderPlaced} = this.state

    return <>{orderPlaced ? this.placeOrder() : this.cartView()}</>
  }
}
export default withRouter(CartList)
