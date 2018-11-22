import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DishesList from './components/DishesList'
import NotFound from './components/utils/NotFound'
import { Header } from './components/utils/Header'
import { Container } from './style'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path='/' component={DishesList} />
            <Route exact path='/dishes' component={DishesList} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
