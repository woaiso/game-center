import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game } from './main';
import { gamelist } from './data';
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
        </Content>
      </Page>
    );
  }
}
