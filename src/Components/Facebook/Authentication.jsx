import React from 'react';
import FacebookActions from '../../Actions/FacebookActions';

import './Authentication.less';

class FacebookAuth extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.__onChange = this.__onChange.bind(this);
    this.state = {
      status: '',
      name: ''
    };
  }

  componentDidMount() {
    FacebookActions.init(this.__onChange);
  }

  handleLogin() {
    FacebookActions.login(this.__onChange);
  }

  handleLogout() {
    FacebookActions.logout(this.__onChange);
  }

  //this function gonna change state of Authentication status
  __onChange(data) {
    console.log(this.state);
    this.setState(data);
  };

  render() {
    const text = (this.state.status === 'connected' && this.state.name) ?
      `Thanks for logging in, ${this.state.name}`:'Please log into this app';
    return (
      <div className='Main___auth'>
        <span>{text}</span>
        <div className='Button___group'>
          <button
            className='Button___style'
            onClick={this.handleLogin}
            hidden={this.state.status === 'connected'}
          >
            <a href="#">Login</a>
          </button>
          <button
            className='Button___style'
            onClick={this.handleLogout}
            hidden={this.state.status === 'unknown'}
          >
            <a href="#">Logout</a>
          </button>
        </div>
      </div>
    )
  }
}

export default FacebookAuth;