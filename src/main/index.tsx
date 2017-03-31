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
const exampleIcon = require('./../images/game_01.png');

const gamelist = [
  {
    title: '最近在玩',
    games: [
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
      }
    ]
  },
  {
    title: '最近下载',
    games: [
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
      }
    ]
  }
]

const GameItem = ({ gameItem }) => (
  <li className="item">
    <div className="icon" style={{ backgroundImage: 'url(' + gameItem.icon + ')' }} />
    <span className="name">
      {gameItem.text}
    </span>
  </li>
);

const Game = ({ game }) => (
  <section className="g-item">
    <div className="title">
      <h5>{game.title}</h5>
    </div>
    <div className="game-list">
      <ul>
        {game.games.map((item, index) => <GameItem gameItem={item} key={index} />)}
      </ul>
    </div>
  </section>
);

export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div className="page">
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
          {gamelist.map((game, index) => <Game game={game} key={index} />)}
        </div>
        {/*历程*/}
        <TimeLine />
      </div>
    );
  }
}

const TimeLine = () => (
  <div className="timeline">
    <div className="head">
      <h5 className="title">历程</h5>
      <div className="tabs">
        <div className="tab current">全部</div>
        <div className="tab">手游</div>
        <div className="tab">H5</div>
      </div>
    </div>
    {/*历程时间轴*/}
    <ul className="t-content">
      <li>
        <div className="t-item">
          <span className="date">
            <span className="day">08</span>
            <span className="month">12月</span>
          </span>
          <div className="card">
            <h5 className="title">最近登录 <span className="sub">2016-10-11加入</span> </h5>
            <div className="game-item-h">
              <div className="icon" style={{ backgroundImage: 'url(' + exampleIcon + ')' }} />
              <div className="detail">
                <h5 className="title">太空猫和原子猫头鹰子猫...</h5>
                <div>
                  <button className="group-badge">策略类</button>
                </div>
                <div className="sub-title">
                  搜集小伙伴一起战斗吧！集小伙伴一意起
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

ReactDOM.render(<Main />, document.getElementById('root'));
