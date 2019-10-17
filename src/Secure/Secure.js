import React, { Component } from 'react'
import { SecureText } from './SecureText'
import { Login } from '../Login/Login'

export class Secure extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: true
    })
  }

  render() {
    if (this.state.clicked) {
      return <Login />
    }
    return <SecureText handleClick={this.handleClick} user={this.props.user} />
  }
}
