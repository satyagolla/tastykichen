import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

import ReactContext from '../ReactContext'
import Counter from '../Counter'

import './index.css'

const FoodItem = props => {
  const {item} = props
  const {id, cost, name, imageUrl, rating} = item

  return (
    <ReactContext.Consumer>
      {value => {
        const {cartData, addToCartList} = value

        const isTrue = cartData.some(each => each.id === id)

        const addToList = () => {
          addToCartList({...item, quantity: 1})
        }

        return (
          <li className="food-list-item">
            <img src={imageUrl} alt="foodItem" className="image-item" />
            <div className="food-desc-card">
              <h1 className="item-name">{name}</h1>
              <p className="cost">
                <BiRupee />
                {cost}
              </p>
              <p className="food-rating">
                <AiFillStar className="food-star" />
                {rating}
              </p>
              {isTrue ? (
                <Counter itemId={id} />
              ) : (
                <button
                  type="button"
                  className="add-button"
                  onClick={addToList}
                >
                  Add
                </button>
              )}
            </div>
          </li>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default FoodItem
