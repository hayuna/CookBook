import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DishesList from './components/DishesList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={DishesList} />
            <Route exact path='/dishes' component={DishesList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
