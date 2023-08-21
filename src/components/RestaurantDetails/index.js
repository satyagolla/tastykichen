import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import FoodItem from '../FoodItem'

import Footer from '../Footer'
import Navbar from '../Navbar'
import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  pending: 'PENDING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class RestaurantDetails extends Component {
  state = {restaurantDetails: {}, apiStatus: apiStatusList.pending}

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const details = {
        costForTwo: data.cost_for_two,
        cuisine: data.cuisine,
        id: data.id,
        imageUrl: data.image_url,
        itemsCount: data.items_count,
        location: data.location,
        name: data.name,
        opensAt: data.opens_at,
        rating: data.rating,
        reviewsCount: data.reviews_count,
        foodItems: data.food_items.map(each => ({
          id: each.id,
          cost: each.cost,
          foodType: each.food_type,
          imageUrl: each.image_url,
          name: each.name,
          rating: each.rating,
        })),
      }

      this.setState({
        restaurantDetails: details,
        apiStatus: apiStatusList.success,
      })
    }
  }

  getLoader = () => (
    <div className="restaurant-loader-container">
      <Loader type="Oval" color="#fa9119" height={50} width={50} />
    </div>
  )

  getBanner = () => {
    const {restaurantDetails} = this.state
    const {
      name,
      cuisine,
      location,
      rating,
      costForTwo,
      reviewsCount,
      imageUrl,
    } = restaurantDetails
    return (
      <div className="restaurant-banner">
        <img src={imageUrl} alt="restaurant" className="restaurant-image" />
        <div className="desc-card">
          <h1 className="name-heading">{name}</h1>
          <p className="desc">{cuisine}</p>
          <p className="desc">{location}</p>

          <div className="rating-review-count-card">
            <div className="review-card">
              <p className="rating-desc">
                <AiFillStar />
                {rating}
              </p>
              <p className="description">{reviewsCount}+ Reviews</p>
            </div>

            <hr className="line" />
            <div className="review-card">
              <p className="rating-desc">
                <BiRupee />
                {costForTwo}
              </p>
              <p className="description">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getFoodItems = () => {
    const {restaurantDetails} = this.state

    const itemsList = restaurantDetails.foodItems

    return (
      <ul className="Food-list-item">
        {itemsList.map(each => (
          <FoodItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  getSuccessView = () => (
    <>
      {this.getBanner()}
      {this.getFoodItems()}
      <Footer />
    </>
  )

  getView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.pending:
        return this.getLoader()
      case apiStatusList.success:
        return this.getSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="Route-details-card">{this.getView()}</div>
      </>
    )
  }
}

export default RestaurantDetails
