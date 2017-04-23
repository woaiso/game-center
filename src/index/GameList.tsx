import * as React from 'react';
import Button from './../components/button';
const exampleIcon = require('./../images/game_01.png');
/**
 * 游戏列表
 */

export class Star extends React.Component<any, any>{
  render() {
    const { className } = this.props;
    return (
      <div className={"stars" + (className ? ' ' + className : '')}>
        {/*<span className="star star-temp" />*/}

        {/*<span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
        <span className="star star-9" />*/}
        <span className="star star-full" />
        <span className="star star-full" />
        <span className="star star-full" />
        <span className="star star-full" />
        <span className="star star-3" />
        <div className="number">8.6</div>
      </div>
    );
  }
}

const gamelist = [
  {
    icon: require('./../images/game_04.png'),
    title: '地牢战争',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '在线玩' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_03.png'),
    title: '光明大陆',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '134万人在线玩' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_02.png'),
    title: '糖果苏打传奇',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '在线玩' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_04.png'),
    title: '地牢战争',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '在线玩' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_01.png'),
    title: '我的猫呢',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '134万人在线玩' }
    ],
    subtext: '来战个痛快'
  },
  {
    icon: require('./../images/game_03.png'),
    title: '冒险村物语',
    badge: [
      { button: '策略类' },
      { button: '3D' },
      { text: '在线玩' }
    ],
    subtext: '来战个痛快'
  }
]

export const GameItem = ({ game = gamelist[0] }) => (
  <div className="game-list-item with-bottom-line">
    <div>
      <img className="game-icon" src={game.icon} />
    </div>
    <div className="list-item-content">
      <div className="title">{game.title}</div>
      <div className="group-badge">
        {(game as any).badge.map((badge, index) => badge.button ? <Button key={index} type="primary" outline={true}>{badge.button}</Button> : <span key={index} className="badge-text">{badge.text}</span>)}
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
        {gamelist.map((game, index) => <GameItem key={index} game={game} />)}
      </div>
    );
  }
}
