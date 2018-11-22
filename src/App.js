import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DishesList from './components/DishesList'
import { Container } from './style'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={DishesList} />
            <Route exact path='/dishes' component={DishesList} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
