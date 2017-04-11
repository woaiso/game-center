import * as React from 'react';
import Button from './../components/button';
/**
 * 游戏列表
 */

const GameItem = () => (
  <div className="game-list-item">
    <div className="icon">
      <img src={""} />
    </div>
    <div className="list-item-content">
      <div className="title">光明大陆</div>
      <div className="group-badge">
        <Button type="primary" outline={true} className="group-badge">策略类</Button>
      </div>
      <div className="sub-text">来战个痛快</div>
    </div>
    <div className="list-item-right">
      <Button>打开</Button>
    </div>
  </div>
);

export default class GameList extends React.Component<any, any>{
  render() {
    return (
      <div>
        <GameItem />
      </div>
    );
  }
}
