import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NMRWrapper from './NMRiumWrapper';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={NMRWrapper} />
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
