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
  Item,
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

    const home = currentPath === '/' || currentPath !== '/cart'
    const cart = currentPath === '/cart'

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
          <MenuCard>
            <ListItemCard>
              <Link to="/" className="link">
                <Item textColor={home}>Home</Item>
              </Link>
              <Link to="/cart" className="link">
                <Item textColor={cart}>Cart</Item>
              </Link>
              <Item>
                <LogOut onClick={this.logout}>Logout</LogOut>
              </Item>
            </ListItemCard>
            <Cancel onClick={this.hideMenu}>
              <MdCancel />
            </Cancel>
          </MenuCard>
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
                  <Item textColor={home}>Home</Item>
                </Link>
                <Link to="/cart" className="link">
                  <Item textColor={cart}>Cart</Item>
                </Link>
                <Item>
                  <LogOut onClick={this.logout}>Logout</LogOut>
                </Item>
              </ListItemCard>
            </MenuCard>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Navbar)
