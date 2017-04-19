import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game, HotGame } from './my-game';
import GameList from './GameList';
import Tab from './../components/tab';
import { gamelist, hotGame } from './data';
/**
 * 游戏界面
 */

export default class Games extends React.Component<any, any> {
  render() {
    const tabs = [
      {
        text: '手游',
        href: 'javascript:;'
      },
      {
        text: '页游',
        href: 'javascript:;',
        active: true
      }
    ]
    return (
      <Page>
        <Header tabs={tabs} />
        <Content>
          <Slider className="game-slider" />
          <Game game={gamelist[0]} />
          <HotGame game={hotGame} />
          <GameList />
          <div className="data-loading">
            <span className="loading-spiner" />
            加载中
          </div>
          <div className="no-more-data">
            没有数据了
          </div>
        </Content>
      </Page>
    );
  }
}
