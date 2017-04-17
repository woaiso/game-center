import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './../../respones.js';
import './../components/style/index.less';
import './main.less';

import Main from './main';
import MyGameTemp from './my-game-temp';
import Games from './games';
import Top from './top';
import Detail from './detail';

const routers = [
  {
    path: '/main',
    component: Main
  }, {
    path: '/my-game-temp',
    component: MyGameTemp
  }, {
    path: '/games',
    component: Games
  }, {
    path: '/top',
    component: Top
  }, {
    path: '/detail',
    component: Detail
  }
];

const BasicRouter = () => (
  <Router>
    <div>
      {routers.map((router, index) => <Route key={index} exact={index === 0} path={router.path} component={router.component} />)}
    </div>
  </Router>
);

//renderstatic

let html = [] as any[];

routers.forEach(item => {
  const Component = item.component;
  html.push({
    path: item.path,
    html: renderToStaticMarkup(<Component />)
  });
});


console.log(JSON.stringify(html));

ReactDOM.render(<BasicRouter />, document.getElementById('root'));
