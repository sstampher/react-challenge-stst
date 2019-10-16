import React, { Component } from 'react'
import { LoginForm } from './LoginForm'
import { login } from '../lib/api'
import { Welcome } from '../Welcome/Welcome'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      loggedInUser: '',
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await login(this.state)
      this.setState({
        loggedInUser: res.username
      })
    } catch (err) {
      this.setState({
        error: err.message
      })
    }
    this.setState({
      username: '',
      password: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if (this.state.loggedInUser) {
      return <Welcome user={this.state.loggedInUser} />
    }
    return (
      <LoginForm
        username={this.state.username}
        password={this.state.password}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}
