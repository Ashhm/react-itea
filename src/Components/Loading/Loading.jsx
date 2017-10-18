import React from 'react';
import './Loading.less';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className='Loading___spiner'></div>
    )
  }
}

export default Loading;