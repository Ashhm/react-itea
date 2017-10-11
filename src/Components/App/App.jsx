import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Popular from '../Popular/Popular';
import Navtab from '../Navtab/Navtab';
import Home from '../Home/Home';
import Battle from '../Battle/Battle';

import './App.less';
import {indigo500, indigo100, redA700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: redA700,
    primary3Color: redA700,
    //accent1Color: 'white',
    accent2Color: indigo100,
    //accent3Color: 'white'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //MuiThemeProvider accept only one element same as Router
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Navtab/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/battle' component={Battle}/>
              <Route path='/popular' component={Popular}/>
              <Route render={() => (<div>This page not found.</div>)}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;