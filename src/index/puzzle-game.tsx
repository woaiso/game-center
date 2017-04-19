import * as React from 'react';
import Header from './../components/header';
import Button from './../components/button';

const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');

import { Star } from './GameList';

const GameItem = ({ loading = false, hot = false }) => (
  <div className="game-list-item with-bottom-line">
    <div>
      <img className="game-icon" src={exampleIcon} />
    </div>
    <div className="list-item-content">
      <div className="title">光明大陆 {hot ? <span className="hot-badge" /> : null} </div>
      <Star className="pull-bottom" />
      <div className="group-badge">
        <Button type="primary" outline={true}>策略类</Button>
      </div>
    </div>
    <div className="list-item-right">
      {loading ? <Button className="loading-button" /> : <Button className="full-button">打开</Button>}
    </div>
  </div >
)

export default () => (
  <div className="page">
    <Header title="休闲益智" />
    <div className="content white">
      <div className="fixed-content" />
      <div className="scroll-content">
        <GameItem hot={true} />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem loading={true} />
      </div>
    </div>
  </div >
);
