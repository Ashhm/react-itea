import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import './Result.less';

function Back() {
  return (
    <Link
      className='Back___button'
      to={{
        pathname: '/battle'
      }}
    >
      <RaisedButton
        label='Back'
        primary={true}
      />
    </Link>
  )
}

export default Back;