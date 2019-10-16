import React, {Component} from 'react';
import {LoginForm} from './LoginForm';

export class Login extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    console.log(e.target.value, this.state, 'stupid');
  }

  render(){
    const {username, password} = this.state;
    return <LoginForm 
            username={username} 
            password={password} 
            handleSubmit={this.handleSubmit}
            />
  }
}