import * as React from 'react';
import Header from './../components/header';
import Button from './../components/button';

const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');

import { GameItem } from './GameList';

export default () => (
  <div className="page">
    <Header title="火爆人气" />
    <div className="content white">
      <div className="fixed-content" />
      <div className="scroll-content">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    </div>
  </div>
);
