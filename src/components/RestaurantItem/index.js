import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './index.css'

const RestaurantItem = props => {
  const {restaurantDetails} = props
  const {name, imageUrl, id, cuisine, userRating} = restaurantDetails
  const {rating, totalReviews} = userRating
  return (
    <Link to={`/restaurant/${id}`} className="link">
      <li className="item-container">
        <img src={imageUrl} alt="restaurant" className="items-image" />
        <div className="item-text">
          <h1 className="restaurant-name">{name}</h1>
          <p className="cuisine-name">{cuisine}</p>
          <div className="rating-card">
            <AiFillStar className="star" />
            <p className="rating">{rating}</p>
            <p className="total-reviews">({totalReviews} ratings)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantItem
