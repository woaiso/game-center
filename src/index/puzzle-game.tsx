import * as React from 'react';
import Header from './../components/header';
import Button from './../components/button';

const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');

import { Star } from './GameList';

const gamelist = [
  {
    icon: require('./../images/game_04.png'),
    title: '地牢战争',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快',
    hot: true
  },
  {
    icon: require('./../images/game_03.png'),
    title: '光明大陆',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_02.png'),
    title: '糖果苏打传奇',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快',
    loading: true
  },
  {
    icon: require('./../images/game_04.png'),
    title: '地牢战争',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_01.png'),
    title: '我的猫呢',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_03.png'),
    title: '冒险村物语',
    badge: [
      { button: '策略类' },
      { button: '3D' }
    ],
    subtext: '来战个痛快'
  }
]

const GameItem = ({ game = gamelist[0] }) => (
  <div className="game-list-item with-bottom-line">
    <div>
      <img className="game-icon" src={game.icon} />
    </div>
    <div className="list-item-content">
      <div className="title">{game.title} {(game as any).hot ? <span className="hot-badge" /> : null} </div>
      <Star className="pull-bottom" />
      <div className="group-badge">
        {game.badge.map((item, index) => <Button key={index} type="primary" outline={true}>{item.button}</Button>)}
      </div>
    </div>
    <div className="list-item-right">
      {(game as any).loading ? <Button className="loading-button" /> : <Button className="full-button">打开</Button>}
    </div>
  </div >
)

export default () => (
  <div className="page">
    <Header title="休闲益智" />
    <div className="content white">
      <div className="fixed-content" />
      <div className="scroll-content">
        {gamelist.map((item, index)=><GameItem key={index} game={item} />)}
      </div>
    </div>
  </div >
);
