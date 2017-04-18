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

export default class GamesLibrary extends React.Component<any, any> {
  render() {
    const tabs = [
      {
        text: '手游',
        href: 'javascript:;'
      },
      {
        text: '页游',
        href: 'javascript:;'
      }
    ]
    return (
      <Page>
        <Header tabs={tabs} />
        <Tab hasHeader={true} current={1} />
        <Content withTab={true}>
          <Slider className="game-slider" />
          <Game game={gamelist[ 0 ]} />
          <Game game={gamelist[ 0 ]} />
          <Game game={gamelist[ 0 ]} />
        </Content>
      </Page>
    );
  }
}