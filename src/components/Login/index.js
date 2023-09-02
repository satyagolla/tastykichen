import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component {
  state = {username: '', password: '', errorMsg: ''}

  submitUsernameAndPassword = event => {
    event.preventDefault()
    this.getHomePage()
  }

  getHomePage = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const object = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(object),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {errorMsg} = this.state
    console.log('login')
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-form-card">
            <div className="large-device-heading-image-card">
              <img
                src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                alt="website logo"
                className="website-logo"
              />
              <h1 className="tasty-kitchen">Tasty Kitchens</h1>
              <h1 className="main-heading">Login</h1>
            </div>
            <div className="small-device-heading-image-card">
              <h1 className="main-heading">Login</h1>
              <img
                src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Rectangle%201457.png?updatedAt=1692167752080"
                alt="website login"
              />
            </div>
            <form
              className="form-card"
              onSubmit={this.submitUsernameAndPassword}
            >
              <div className="input-card">
                <label htmlFor="username" className="label">
                  USERNAME
                </label>
                <input
                  type="text"
                  id="username"
                  className="input"
                  onChange={this.updateUsername}
                />
              </div>
              <div className="input-card">
                <label htmlFor="password" className="label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="input"
                  onChange={this.updatePassword}
                />
              </div>
              <p className="error-msg">{errorMsg}</p>
              <button
                className="login-button"
                type="submit"
                onClick={this.submitUsernameAndPassword}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <img
          src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Rectangle%201456.png?updatedAt=1692162576781"
          className="large-image"
          alt="website login"
        />
      </div>
    )
  }
}
export default LoginRoute
