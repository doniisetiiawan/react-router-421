import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
