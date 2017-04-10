import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game, HotGame } from './main';
import { gamelist, hotGame } from './data';
/**
 * 游戏界面
 */

export default class Games extends React.Component<any, any> {
  render() {
    return (
      <Page>
        <Header />
        <Content>
          <Slider className="game-slider" />
          <Game game={gamelist[0]} />
          <HotGame game={hotGame} />
        </Content>
      </Page>
    );
  }
}
