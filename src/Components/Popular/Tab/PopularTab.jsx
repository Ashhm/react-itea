import React from 'react';
import './PopularTab.less';

class PopularTab extends React.Component {
  render() {
    return (
      <div className='PopularTab'>
        <img src={this.props.picture}/>
        <span>{this.props.title}</span>
        {this.props.children}
      </div>
    )
  }
}

export default PopularTab;