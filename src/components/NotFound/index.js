import {withRouter} from 'react-router-dom'

import './index.css'

const NotFound = props => {
  const redirectToHomePage = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-card">
      <img
        src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/erroring%201.png?updatedAt=1692162574744"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-desc">
        We are sorry, the page you requested could not be found. Please go back
        to the homepage
      </p>
      <button
        type="button"
        onClick={redirectToHomePage}
        className="home-page-button"
      >
        Home Page
      </button>
    </div>
  )
}

export default withRouter(NotFound)
