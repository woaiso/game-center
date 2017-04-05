import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './respones';
import './../components/style/index.less';
import './main.less';

import Main from './main';
import MyGameTemp from './my-game-temp';

const BasicRouter = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Main} />
      <Route path="/my-game-temp" component={MyGameTemp} />
    </div>
  </Router>
);

ReactDOM.render(<BasicRouter />, document.getElementById('root'));
