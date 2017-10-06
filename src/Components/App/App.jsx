import React from 'react';
import Popular from "../Popular/Popular";
import PopularGrid from "../Popular/PopularGrid";

import './App.less';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <Popular/>
      </div>
    )
  }
}

export default App;