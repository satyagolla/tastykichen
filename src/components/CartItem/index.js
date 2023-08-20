import {BiRupee} from 'react-icons/bi'
import Counter from '../Counter'
import './index.css'

const CartItem = props => {
  const {item} = props
  const {imageUrl, id, name, cost} = item

  return (
    <li className="cart-item-container" testid="cartItem">
      <img src={imageUrl} alt="foodItem" className="cart-image" />
      <div className="cart-item-desc-card">
        <h1 className="cart-item-heading">{name}</h1>

        <div className="counter">
          <Counter itemId={id} />
        </div>

        <p className="cart-item-desc">
          <BiRupee />
          {cost}
        </p>
      </div>
    </li>
  )
}
export default CartItem
