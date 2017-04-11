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
      <div className="star">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" style={{ "margin-right": "0px" }} >
          <defs>
            <linearGradient id="demo-onchange_grad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stop-color="rgba(51,155,0,1)" />
              <stop offset="0%" stop-color="white" />
            </linearGradient>
          </defs>
          <polygon style={{ "fill": "url(#demo-onchange_grad5)", stroke: "black", "stroke-width": "2px" }} points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
        </svg>
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
