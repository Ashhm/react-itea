import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {lightBlue700, tealA200, yellow400} from 'material-ui/styles/colors'
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import GameIcon from 'material-ui/svg-icons/hardware/gamepad';
import MoodIcon from 'material-ui/svg-icons/social/mood';

import './Navtab.less';
import FacebookAuth from '../Facebook/Authentication';
import FacebookActions from '../../Actions/FacebookActions';

class Navtab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      username: ''
    };
    this.handleAuthChange=this.handleAuthChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    FacebookActions.getAuthInfo()
      .then(this.handleAuthChange);
  }

  handleAuthChange({status, username}) {
    this.setState(() => {
      return {
        status: status ==='connected',
        username
      }
    });

  }

  handleLogin () {
    FacebookActions.login()
      .then(this.handleAuthChange);
  }

  handleLogout() {
    FacebookActions.logout()
      .then(this.handleAuthChange);
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Facebook battle"/>
          <NavLink to='/'>
            <MenuItem
              value={1}
              primaryText='Home'
              leftIcon={<HomeIcon color={yellow400}/>}
            />
          </NavLink>
          <NavLink to='/battle'>
            <MenuItem
              value={2}
              primaryText='Battle'
              leftIcon={<GameIcon color={lightBlue700}/>}
            />
          </NavLink>
          <Link to={{
            pathname: '/popular'
          }}
          >
            <MenuItem
              value={3}
              primaryText='Popular'
              leftIcon={<MoodIcon color={tealA200}/>}
            />
          </Link>
        </ToolbarGroup>
        <ToolbarSeparator style={{alignSelf: 'center'}}/>
        <ToolbarGroup>
          <FacebookAuth
            authState={this.state}
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Navtab;