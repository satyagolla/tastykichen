import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  InputCard,
  Label,
  Input,
  LoginButton,
  From,
  ErrorMsg,
  FormContainer,
} from './styledComponent'
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
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="login-container-for-small-device">
          <div className="image-heading-card">
            <h1 className="login-heading">Login</h1>
            <img
              src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Rectangle%201457.png?updatedAt=1692167752080"
              alt="website login"
              className="image"
            />
          </div>
          <From onSubmit={this.submitUsernameAndPassword}>
            <InputCard>
              <Label htmlFor="username">USERNAME</Label>
              <Input type="text" id="username" onChange={this.updateUsername} />
            </InputCard>
            <InputCard>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type="password"
                id="password"
                onChange={this.updatePassword}
              />
            </InputCard>
            {errorMsg === '' ? '' : <ErrorMsg>{errorMsg}</ErrorMsg>}
            <LoginButton type="submit" onClick={this.submitUsernameAndPassword}>
              Login
            </LoginButton>
          </From>
        </div>
        <div className="login-container-for-large-device">
          <FormContainer>
            <From onSubmit={this.submitUsernameAndPassword}>
              <div className="image-heading-title-card">
                <img
                  src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Frame%20274.png?updatedAt=1692162574618"
                  alt="project icon"
                  className="website logo"
                />

                <p className="tasty-name">Tasty kitchens</p>
                <h1 className="login-heading">Login</h1>
              </div>
              <InputCard>
                <Label htmlFor="username">USERNAME</Label>
                <Input
                  type="text"
                  id="username"
                  onChange={this.updateUsername}
                />
              </InputCard>
              <InputCard>
                <Label htmlFor="password">PASSWORD</Label>
                <Input
                  type="password"
                  id="password"
                  onChange={this.updatePassword}
                />
              </InputCard>
              {errorMsg === '' ? '' : <ErrorMsg>{errorMsg}</ErrorMsg>}
              <LoginButton
                type="submit"
                onClick={this.submitUsernameAndPassword}
              >
                Login
              </LoginButton>
            </From>
          </FormContainer>
          <img
            src="https://ik.imagekit.io/k57gckxqm/Tasty%20Kitchen%20Project/Rectangle%201456.png?updatedAt=1692162576781"
            alt="rect"
            className="website login"
          />
        </div>
      </>
    )
  }
}
export default LoginRoute
