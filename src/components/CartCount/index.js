import {Component} from 'react'
import ReactContext from '../ReactContext'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {cartData, increaseQuantity, decreaseQuantity} = value
          const {itemId} = this.props
          const object = cartData.find(each => each.id === itemId)
          const items = object.quantity

          const onDecrement = () => {
            decreaseQuantity(itemId)
          }

          const onIncrement = () => {
            increaseQuantity(itemId)
          }

          return (
            <div className="increment-decrement-button">
              <button
                type="button"
                className="counter-button"
                onClick={onDecrement}
              >
                -
              </button>
              <div>
                <p>{items}</p>
              </div>
              <button
                type="button"
                className="counter-button"
                onClick={onIncrement}
              >
                +
              </button>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Counter
