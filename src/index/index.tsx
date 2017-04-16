import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './respones';
import './../components/style/index.less';
import './main.less';

import Main from './main';
import MyGameTemp from './my-game-temp';
import Games from './games';
import Top from './top';
import Detail from './detail';

const BasicRouter = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Main} />
      <Route path="/my-game-temp" component={MyGameTemp} />
      <Route path="/games" component={Games} />
      <Route path="/top" component={Top} />
      <Route path="/detail" component={Detail} />
    </div>
  </Router>
);

//.
console.log(renderToStaticMarkup(<Main />));

ReactDOM.render(<BasicRouter />, document.getElementById('root'));
