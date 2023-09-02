import {Component} from 'react'
import {CgMenu} from 'react-icons/cg'
import {MdCancel} from 'react-icons/md'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Navbar extends Component {
  state = {isTrue: false}

  hideMenu = () => {
    this.setState({isTrue: false})
  }

  showMenu = () => {
    this.setState({isTrue: true})
  }

  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {isTrue} = this.state

    const {match} = this.props
    const currentPath = match.path

    const home =
      currentPath === '/' || currentPath !== '/cart' ? 'list-color' : ''
    const cart = currentPath === '/cart' ? 'list-color' : ''

    return (
      <>
        <nav className="header-container-for-small-device">
          <Link to="/" className="link">
            <div className="website-logo-card">
              <img
                className="logo"
                src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                alt="website logo"
              />
              <p className="title">Tasty Kitchen</p>
            </div>
          </Link>

          <button className="menu" type="button" onClick={this.showMenu}>
            <CgMenu />
          </button>
        </nav>
        {isTrue ? (
          <div className="menu-card-small-device">
            <div className="menu-items">
              <ul className="list-card-items">
                <Link to="/" className="link">
                  <li className={`li-element ${home}`}>Home</li>
                </Link>
                <Link to="/cart" className="link">
                  <li className={`li-element ${cart}`}>Cart</li>
                </Link>
                <li className="li-element">
                  <button
                    className="logout-button"
                    type="button"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
              <button
                className="cancel-button"
                type="button"
                onClick={this.hideMenu}
              >
                <MdCancel />
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <nav>
          <div className="header-container-for-large-device">
            <Link to="/" className="link">
              <div className="website-logo-card">
                <img
                  className="logo"
                  src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                  alt="website logo"
                />
                <p className="title">Tasty Kitchen</p>
              </div>
            </Link>
            <div className="list-card-items">
              <ul className="list-card-items">
                <Link to="/" className="link">
                  <li className={`li-element ${home}`}>Home</li>
                </Link>
                <Link to="/cart" className="link">
                  <li className={`li-element ${cart}`}>Cart</li>
                </Link>
                <li className="li-element">
                  <button
                    className="logout-button"
                    type="button"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Navbar)
