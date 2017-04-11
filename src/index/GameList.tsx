import * as React from 'react';
import Button from './../components/button';
const exampleIcon = require('./../images/game_01.png');
/**
 * 游戏列表
 */

const GameItem = () => (
  <div className="game-list-item with-bottom-line">
    <div>
      <img className="game-icon" src={exampleIcon} />
    </div>
    <div className="list-item-content">
      <div className="title">光明大陆</div>
      <div className="group-badge">
        <Button type="primary" outline={true}>策略类</Button>
      </div>
      <div className="sub-text">来战个痛快</div>
    </div>
    <div className="list-item-right">
      <Button>打开</Button>
    </div>
  </div>
);

const GameListHeader = () => (
  <div className="header-wrap">
    <span className="title">新游尝鲜</span>
    <a className="more-link" href="javascript:;">更多</a>
  </div>
);

export default class GameList extends React.Component<any, any>{
  render() {
    return (
      <div className="game-list-wrap">
        <GameListHeader />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    );
  }
}
