import {BiRupee} from 'react-icons/bi'
import CartCount from '../CartCount'
import './index.css'

const CartItem = props => {
  const {item} = props
  const {imageUrl, id, name, cost} = item

  return (
    <li testid="cartItem" className="cart-item-container">
      <div>
        <img src={imageUrl} alt="food item" className="cart-item-image" />
      </div>

      <div className="cart-item-desc-card">
        <h1 className="cart-item-heading">{name}</h1>
        <div className="counter">
          <CartCount itemId={id} />
        </div>
        <div>
          <p className="cart-item-desc">
            <BiRupee />
            {cost}
          </p>
        </div>
      </div>
    </li>
  )
}
export default CartItem
