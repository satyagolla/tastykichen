import {Component} from 'react'
import {CgMenu} from 'react-icons/cg'
import {MdCancel} from 'react-icons/md'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  WebsiteLogoCart,
  Logo,
  Title,
  Menu,
  MenuCard,
  ListItemCard,
  LogOut,
  Cancel,
} from './styledComponent'
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
            <WebsiteLogoCart>
              <Logo
                src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                alt="website logo"
              />
              <Title>Tasty Kitchen</Title>
            </WebsiteLogoCart>
          </Link>

          <Menu type="button" onClick={this.showMenu}>
            <CgMenu />
          </Menu>
        </nav>
        {isTrue ? (
          <div className="menu-card-small-device">
            <MenuCard>
              <ListItemCard>
                <Link to="/" className="link">
                  <li className={`li-element ${home}`}>Home</li>
                </Link>
                <Link to="/cart" className="link">
                  <li className={`li-element ${cart}`}>Cart</li>
                </Link>
                <li className="li-element">
                  <LogOut onClick={this.logout}>Logout</LogOut>
                </li>
              </ListItemCard>
              <Cancel onClick={this.hideMenu}>
                <MdCancel />
              </Cancel>
            </MenuCard>
          </div>
        ) : (
          ''
        )}
        <nav>
          <div className="header-container-for-large-device">
            <Link to="/" className="link">
              <WebsiteLogoCart>
                <Logo
                  src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                  alt="website logo"
                />
                <Title>Tasty Kitchen</Title>
              </WebsiteLogoCart>
            </Link>
            <MenuCard>
              <ListItemCard>
                <Link to="/" className="link">
                  <li className={`li-element ${home}`}>Home</li>
                </Link>
                <Link to="/cart" className="link">
                  <li className={`li-element ${cart}`}>Cart</li>
                </Link>
                <li className="li-element">
                  <LogOut onClick={this.logout}>Logout</LogOut>
                </li>
              </ListItemCard>
            </MenuCard>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Navbar)
