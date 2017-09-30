import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  render() {
    console.log(this.props);
    return (<div>Hello {this.props.name}</div>);
  };
}

ReactDOM.render(<App name='helloName'/>,
  document.getElementById('app'));