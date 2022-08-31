import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Products from './Products';

const App = () => (
  <div className="page">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;