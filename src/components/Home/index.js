import {Component} from 'react'
import Slider from 'react-slick'
import {MdSort} from 'react-icons/md'
import {GoSearch} from 'react-icons/go'
import Loader from 'react-loader-spinner'
import {GrNext, GrPrevious} from 'react-icons/gr'
import Cookies from 'js-cookie'

import Footer from '../Footer'
import Navbar from '../Navbar'
import RestaurantItem from '../RestaurantItem'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusList = {
  initial: 'INITIAL',
  pending: 'PENDING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    bannersList: [],
    itemsList: [],
    apiStatusItems: apiStatusList.initial,
    bannerApiStatus: apiStatusList.initial,
    pageNo: 1,
    lastPage: 1,
    searchValue: '',
    filterValue: sortByOptions[1].value,
  }

  componentDidMount() {
    this.getBannerList()
    this.getItemList()
  }

  getItemList = async () => {
    this.setState({apiStatusItems: apiStatusList.pending})

    const {pageNo, filterValue, searchValue} = this.state
    const limit = 9
    const offset = (pageNo - 1) * limit
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/restaurants-list?search=${searchValue}&offset=${offset}&limit=9&sort_by_rating=${filterValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const totals = data.total
      const newList = data.restaurants.map(each => ({
        id: each.id,
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        groupByTime: each.group_by_time,
        hasOnlineDelivery: each.has_online_delivery,
        hasTableBooking: each.has_table_booking,
        imageUrl: each.image_url,
        isDeliveringNow: each.is_delivering_now,
        location: each.location,
        menuType: each.menu_type,
        name: each.name,
        opensAt: each.opens_at,
        userRating: {
          ratingText: each.user_rating.rating_text,
          ratingColor: each.user_rating.rating_color,
          totalReviews: each.user_rating.total_reviews,
          rating: each.user_rating.rating,
        },
      }))

      const newLastPage = Math.ceil(totals / limit)
      this.setState({
        itemsList: newList,
        lastPage: newLastPage,
        apiStatusItems: apiStatusList.success,
      })
    } else {
      this.setState({apiStatusItems: apiStatusList.failure})
    }
  }

  getBannerList = async () => {
    this.setState({bannerApiStatus: apiStatusList.pending})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const newList = data.offers.map(each => ({
        imageUrl: each.image_url,
        id: each.id,
      }))
      this.setState({
        bannersList: newList,
        bannerApiStatus: apiStatusList.success,
      })
    }
  }

  changeFilterValue = event => {
    this.setState({filterValue: event.target.value}, this.getItemList)
  }

  previousPage = () => {
    const {pageNo} = this.state
    if (pageNo > 1) {
      this.setState(prev => ({pageNo: prev.pageNo - 1}), this.getItemList)
    }
  }

  nextPage = () => {
    const {pageNo} = this.state

    if (pageNo < 4) {
      this.setState(prev => ({pageNo: prev.pageNo + 1}), this.getItemList)
    }
  }

  updateSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  updateListWithSearchValue = event => {
    if (event.key === 'Enter') {
      this.getItemList()
    }
  }

  getLoader = () => (
    <div className="loader-container" testid="restaurants-offers-loader">
      <Loader type="Oval" color="#fa9119" height={50} width={50} />
    </div>
  )

  getListLoader = () => (
    <div className="loader-container" testid="restaurants-list-loader">
      <Loader type="Oval" color="#fa9119" height={50} width={50} />
    </div>
  )

  getBannerView = () => {
    const {bannersList} = this.state

    const settings = {
      dots: true,
      slidesToScroll: 1,
      speed: 500,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      <div>
        <Slider {...settings}>
          {bannersList.map(each => (
            <div key={each.id}>
              <img className="banner-image" src={each.imageUrl} alt="offer" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  getSuccessView = () => {
    const {itemsList, pageNo, lastPage} = this.state

    return (
      <>
        <ul className="restaurants-container">
          {itemsList.map(each => (
            <RestaurantItem key={each.id} restaurantDetails={each} />
          ))}
        </ul>
        <div className="next-previous-buttons-card">
          <button
            className="next-button"
            type="button"
            onClick={this.previousPage}
            testid="pagination-left-button"
          >
            <GrPrevious />
          </button>
          <p className="page-number">
            <span testid="active-page-number">{pageNo}</span> of {lastPage}
          </p>

          <button
            className="next-button"
            type="button"
            onClick={this.nextPage}
            testid="pagination-right-button"
          >
            <GrNext />
          </button>
        </div>
      </>
    )
  }

  failureView = () => (
    <div className="no-items-found-card">
      <h1 className="no-restaurant-heading">No Restaurants Found</h1>
      <p className="no-restaurant-desc">
        Try different restaurant or search again
      </p>
    </div>
  )

  getItems = () => {
    const {apiStatusItems} = this.state
    switch (apiStatusItems) {
      case apiStatusList.pending:
        return this.getListLoader()
      case apiStatusList.failure:
        return this.failureView()
      case apiStatusList.success:
        return this.getSuccessView()
      default:
        return null
    }
  }

  getBanners = () => {
    const {bannerApiStatus} = this.state
    switch (bannerApiStatus) {
      case apiStatusList.pending:
        return this.getLoader()
      case apiStatusList.success:
        return this.getBannerView()
      default:
        return null
    }
  }

  render() {
    const {searchValue, filterValue} = this.state

    return (
      <>
        <Navbar />
        <div className="home-container">
          {this.getBanners()}
          <div className="sort-container">
            <div>
              <h1 className="popular-heading">Popular Restaurants</h1>
              <p className="text">
                Select Your favourite restaurant special dish and make your day
                happy...
              </p>
              <div className="search-and-select-container">
                <div className="search-card">
                  <input
                    type="search"
                    value={searchValue}
                    className="input-search"
                    placeholder="Search by Hotel Name"
                    onChange={this.updateSearchValue}
                    onKeyDown={this.updateListWithSearchValue}
                  />
                  <button type="button" className="search-button">
                    <GoSearch />
                  </button>
                </div>
                <div className="select-card">
                  <MdSort className="filter-icon" />
                  <p className="filter-label">Sort By</p>
                  <select
                    id="select"
                    className="select"
                    value={filterValue}
                    onChange={this.changeFilterValue}
                  >
                    {sortByOptions.map(each => (
                      <option key={each.id} value={each.value}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {this.getItems()}
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
