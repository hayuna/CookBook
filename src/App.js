import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DishesList from './components/DishesList'
import DishDetails from './components/DishDetails'
import NotFound from './components/utils/NotFound'
import { Container } from './style'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={DishesList} />
            <Route exact path='/dishes' component={DishesList} />
            <Route exact path='/dishes/:dishId' component={DishDetails} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
