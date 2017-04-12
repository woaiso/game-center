import * as React from 'react';
import Button from './../components/button';
const exampleIcon = require('./../images/game_01.png');
/**
 * 游戏列表
 */

const Star = () => (
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 12.705 512 486.59" style={{ marginRight: '0px' }}>
    <defs>
      <linearGradient id="demo-onset_grad4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="70%" stopColor="#669FEC" />
        <stop offset="0%" stopColor="white" />
      </linearGradient>
    </defs>
    <polygon style={{ fill: "url(#demo-onset_grad4)", stroke: "black", strokeWidth: "2px" }} points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
  </svg>
);

const GameItem = () => (
  <div className="game-list-item with-bottom-line">
    <div>
      <img className="game-icon" src={exampleIcon} />
    </div>
    <div className="list-item-content">
      <div className="title">光明大陆</div>
      <div className="group-badge">
        <Button type="primary" outline={true}>策略类</Button>
        <Button type="primary" outline={true}>3D</Button>
        <Button type="primary" outline={true}>情怀</Button>
        <span className="badge-text">134万人在线玩</span>
      </div>
      <div className="star">
        <Star />
        <Star />
        <Star />
      </div>
      <div className="sub-text">来战个痛快</div>
    </div>
    <div className="list-item-right">
      <Button>打开</Button>
    </div>
  </div >
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
