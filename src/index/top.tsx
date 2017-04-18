import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game, HotGame } from './my-game';
import GameList from './GameList';
import Tab from './../components/tab';
import { gamelist, hotGame } from './data';
import { GameItem } from './GameList';
/**
 * 游戏界面
 */


export default class Games extends React.Component<any, any> {
  render() {
    return (
      <Page>
        <Header />
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
              <GameItem />
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
          </div>
        </Content>
      </Page>
    );
  }
}
