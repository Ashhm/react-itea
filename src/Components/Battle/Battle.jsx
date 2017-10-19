import React from 'react';
import UserContainer from '../PlayerContainer/PlayerContainer';
import UserSearch from './PlayerSearch';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookActions from '../../Actions/FacebookActions';
import {Link} from 'react-router-dom';

import './Battle.less'


class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null,
      playerOneIsLoading: false,
      playerTwoIsLoading: false,
      error: false
    };
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handlePlayerReset = this.handlePlayerReset.bind(this);
  }

  handlePlayerSubmit(playerId, name) {
    this.setState(() => {
      return {
        [playerId]: null,
        [`${playerId}Loading`]: true,
        error: false
      }
    });

    FacebookActions.searchPage(name)
      .then(res => {
        this.setState(() => {
          return {
            [playerId]: res,
            [`${playerId}Loading`]: false,
            error: false
          }
        })
      })
      .catch(err => {
        this.setState(() => {
          return {
            error: true
          }
        })
      })
  }

  handlePlayerReset(playerId) {
    this.setState(() => {
      return {
        [playerId]: null,
        [`${playerId}Loading`]: false,
        error: false
      }
    });
  }

  render() {
    console.log(this.state);
    const {playerOne, playerTwo} = this.state;
    return (
      <div>
        <div className='Battle___main'>

          {playerOne ?
            <UserContainer
              id='playerOne'
              label='Player One'
              name={playerOne.name}
              src={playerOne.avatar}
              url={playerOne.link}
              loading={this.state.playerOneIsLoading}
              onClick={this.handlePlayerReset}
            /> :
            <UserSearch
              id='playerOne'
              label='Player one'
              onSubmit={this.handlePlayerSubmit}
            />
          }

          {playerTwo ?
            <UserContainer
              id='playerTwo'
              label='Player two'
              name={playerTwo.name}
              src={playerTwo.avatar}
              url={playerTwo.link}
              loading={this.state.playerTwoIsLoading}
              onClick={this.handlePlayerReset}
            /> :
            <UserSearch
              id='playerTwo'
              label='Player two'
              onSubmit={this.handlePlayerSubmit}
            />
          }
        </div>
        <div className='Battle___button'>

          {playerOne && playerTwo &&
          <Link
            to={{
              pathname: '/result',
              search: `?playerOneName=${playerOne.name}&playerTwoName=${playerTwo.name}`
            }}
          >
            <RaisedButton
              label='Battle!'
              primary={true}
            />
          </Link>
          }
        </div>
      </div>
    );
  }
}

export default Battle;