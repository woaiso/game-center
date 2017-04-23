import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game, HotGame } from './my-game';
import GameList from './GameList';
import Tab from './../components/tab';
import { gamelist, hotGame } from './data';
import { Star } from './GameList';
/**
 * 游戏界面
 */

import Button from './../components/button';
const exampleIcon = require('./../images/game_02.png');

export class GameItem extends React.Component<any, any>{
  render() {
    const game = gamelist[0].games[Math.floor(Math.random() * gamelist[0].games.length)]
    return (
      <div className="game-list-item with-bottom-line">
        <div>
          <img className="game-icon" src={game.icon} />
        </div>
        <div className="list-item-content">
          <div className="title">{game.text} {(game as any).hot ? <span className="hot-badge" /> : null} </div>
          <Star className="pull-bottom" />
          <div className="group-badge">
            <Button type="primary" outline={true}>策略类</Button>
            <Button type="primary" outline={true}>3D</Button>
            <Button type="primary" outline={true}>情怀</Button>
          </div>
        </div>
      </div >
    );
  }
}


export default class Games extends React.Component<any, any> {
  render() {
    const tabs = [
      {
        text: '手游',
        href: 'javascript:;',
        active: true
      },
      {
        text: '页游',
        href: 'javascript:;'
      }
    ]
    return (
      <Page>
        <Header tabs={tabs} />
        <Tab hasHeader={true} />
        <Content withTab={true}>
          <div className="top-tab">
            <a href="javascript:;" className="top-tab-item current">
              <div className="icon hot" />
              <span>热门游戏榜</span>
            </a>
            <a href="javascript:;" className="top-tab-item">
              <div className="icon new" />
              <span>新游戏飙升榜</span>
            </a>
          </div>
          <div className="top-content">
            <div className="top-item">
              <div className="top-number" />
              <GameItem hot={true} />
            </div>
            <div className="top-item">
              <div className="top-number" />
              <GameItem />
            </div>
            <div className="top-item">
              <div className="top-number" />
              <GameItem />
            </div>
            <div className="top-item">
              <div className="top-number" >4</div>
              <GameItem />
            </div>
            <div className="top-item">
              <div className="top-number" >5</div>
              <GameItem />
            </div>
            <div className="top-item">
              <div className="top-number" >6</div>
              <GameItem />
            </div>
          </div>
        </Content>
      </Page>
    );
  }
}
