// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="login-container">
        <h1 className="login-title">Please Login</h1>
        <button className="login-btn" type="submit" onClick={this.onClickLogin}>
          Login With Sample Credits
        </button>
      </div>
    )
  }
}
export default Login
