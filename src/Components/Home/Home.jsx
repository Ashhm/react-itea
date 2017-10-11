import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const style = {
  header:{
    textAlign: 'center',
    margin: '0 auto',
    fontFamily: 'Roboto,sans-serif',
    paddingTop: '20px'
  },
  icon: {
    display: 'inline-block',
    color: 'rgba(0, 0, 0, 0.87)',
    fill: 'rgb(255, 255, 255)',
    height: '24px',
    width: '24px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    verticalAlign: 'middle',
    marginLeft: '12px',
    marginRight: '0px'
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50%',
    margin: '-15% 0 0 -25%'
  }
};

const FacebookIcon = () => {
  return (
    <svg style={style.icon} viewBox='0 0 24 24'>
      <path
        fill='#ffffff'
        d='M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z'
      />
    </svg>
  );
};

const Home = () => {
  return (
    <div>
      <h2 style={style.header}>Welcome on Facebook battle! Press button to continue!</h2>
      <Link to='/battle'>
      <RaisedButton
        className='Main___button'
        label='Go to facebook battle!'
        labelPosition='after'
        icon={<FacebookIcon/>}
        primary={true}
        style={style.button}
      />
      </Link>
    </div>
  );
};

export default Home;