import React from 'react';
import PlayerContainer from '../PlayerContainer/PlayerContainer';
import Back from './Backbutton';
import './Result.less';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.location.params) {
      return (
        <div>
          <h3 className='Empty___header'>
            Choose your players first!
          </h3>
          <div className='Result___container'>
            <Back/>
          </div>
        </div>
      )
    }

    const participant = this.props.location.params;
    const [winner, loser] = participant.sort((a, b) => {
      return b.likes - a.likes;
    });

    return (
      <div>
        <div className='Result___container'>
          <div  className='fadeInLeft'>
          <PlayerContainer
            id='winner'
            label='Winner'
            name={winner.name}
            loading={false}
            src={winner.avatar}
            url={winner.link}
          >
              <span style={{color: 'red'}}>
                Scores: {winner.likes}
              </span>
              <span>
                {winner.social}
              </span>
          </PlayerContainer>
          </div>
          <div  className='fadeInRight'>
          <PlayerContainer
            id='loser'
            label='Loser'
            name={loser.name}
            loading={false}
            src={loser.avatar}
            url={loser.link}
          >
              <span style={{color: 'gray'}}>
                Scores: {loser.likes}
              </span>
              <span>
                {loser.social}
              </span>
          </PlayerContainer>
          </div>
        </div>

        <Back/>
      </div>

    )
  }
}

export default Result;