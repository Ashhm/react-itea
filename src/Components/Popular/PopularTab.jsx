import React from 'react';
import './PopularTab.less';

class PopularTab extends React.Component {
  render() {
    return (
      <div className='PopularTab'>
        <span>{this.props.title}</span>
        <img src={this.props.picture}/>
        {this.props.children}
      </div>
    )
  }
}

export default PopularTab;