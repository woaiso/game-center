import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import WeUI from 'react-weui';

// //import styles
// import 'weui/src/style/weui.less';
// import 'react-weui/lib/react-weui.min.css';

// const {Button} = WeUI;

import Header from './../components/header';
import './respones';
import 'normalize.css/normalize.css';
import './main.less';
const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const gameIcon = require('./../images/game_01.png');

const games = [
  {
    icon: require('./../images/game_01.png'),
    text: '我的猫呢-喵魂 设计 柠檬酱测试文本'
  },
  {
    icon: require('./../images/game_02.png'),
    text: '糖果苏打传奇'
  },
  {
    icon: require('./../images/game_03.png'),
    text: '冒险村物语'
  },
  {
    icon: require('./../images/game_04.png'),
    text: '地牢战争'
  },
]

const GameItem = ({ game }) => (
  <li className="item">
    <div className="icon" style={{ backgroundImage: 'url(' + game.icon + ')' }} />
    <span className="name">
      {game.text}
    </span>
  </li>
);

class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header title="我的游戏" />
        {/*头部区域*/}
        <div className="head-content" style={{ backgroundImage: 'url(' + head_bg + ')' }}>
          <div className="head-inner">
            <img src={head} className="user-head" />
            <span className="user-text">侞果僾不篱</span>
          </div>
        </div>
        {/*中间内容区*/}
        <div className="game-content">
          <section className="g-item">
            <div className="title">
              <h5>最近在玩</h5>
            </div>
            <div className="game-list">
              <ul>
                {games.map((item, index) => <GameItem game={item} key={index} />)}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
