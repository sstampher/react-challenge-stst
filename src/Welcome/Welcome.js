import React, { Component } from 'react'
import { WelcomeText } from './WelcomeText'
import { Login } from '../Login/Login'

export class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      clicked: true
    })
  }

  render() {
    if (this.state.clicked) {
      return <Login />
    }
    return <WelcomeText handleClick={this.handleClick} user={this.props.user} />
  }
}
