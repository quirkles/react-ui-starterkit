import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/home">
        <h1>HomePage</h1>
      </Route>
      <Route path="/*">
        <h1>404!</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
