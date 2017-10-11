import React from 'react';
import {NavLink} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {lightBlue700, tealA200, yellow400} from 'material-ui/styles/colors'
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import GameIcon from 'material-ui/svg-icons/hardware/gamepad';
import MoodIcon from 'material-ui/svg-icons/social/mood';

import './Navtab.less';
import FacebookAuth from "../Facebook/Authentication";

class Navtab extends React.Component {
  constructor(props) {
    super(props);
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
          <NavLink to='/popular'>
            <MenuItem
              value={3}
              primaryText='Popular'
              leftIcon={<MoodIcon color={tealA200}/>}
            />
          </NavLink>
        </ToolbarGroup>
        <ToolbarSeparator style={{alignSelf: 'center'}}/>
        <ToolbarGroup>
          <FacebookAuth />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Navtab;