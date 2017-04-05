import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import WeUI from 'react-weui';

// //import styles
// import 'weui/src/style/weui.less';
// import 'react-weui/lib/react-weui.min.css';

// const {Button} = WeUI;

import Header from './../components/header';
import Button from './../components/button';
import './respones';
import './../components/style/index.less';

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
];

const timelines = [
  {
    date: {
      day: '08',
      month: '12月'
    },
    card_title: '最近登录',
    card_subtitle: '2016-10-11加入',
    game_icon: require('./../images/game_02.png'),
    game_title: '太空猫和原子猫头鹰子猫（策略类大作）',
    game_badge: '策略类',
    game_subtitle: '搜集小伙伴一起战斗吧！集小伙伴一意起XXXXXXXX'
  },
  {
    date: {
      day: '25',
      month: '12月'
    },
    card_title: '下载游戏',
    card_subtitle: '',
    game_icon: require('./../images/game_05.png'),
    game_title: '爆彩童话',
    game_badge: '策略类',
    game_subtitle: '搜集小伙伴一起战斗吧！'
  }, {
    year: '2015年'
  },
  {
    date: {
      day: '08',
      month: '12月'
    },
    card_title: '最近登录',
    card_subtitle: '2016-10-11加入',
    game_icon: require('./../images/game_02.png'),
    game_title: '太空猫和原子猫头鹰子猫（策略类大作）',
    game_badge: '策略类',
    game_subtitle: '搜集小伙伴一起战斗吧！集小伙伴一意起XXXXXXXX'
  },
  {
    date: {
      day: '25',
      month: '12月'
    },
    card_title: '下载游戏',
    card_subtitle: '',
    game_icon: require('./../images/game_05.png'),
    game_title: '爆彩童话',
    game_badge: '策略类',
    game_subtitle: '搜集小伙伴一起战斗吧！'
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
            {timelines.map((timeline, index) => (timeline as any).year ? <Year year={(timeline as any).year} /> : <TimeLine timeline={timeline} key={index} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const Year = ({ year }) => (
  <li>
    <div className="year">{year}</div>
  </li>
);

const TimeLine = ({ timeline }) => (
  <li>
    <div className="t-item">
      <span className="date">
        <span className="day">{timeline.date.day}</span>
        <span className="month">{timeline.date.month}</span>
      </span>
      <div className="card">
        <h5 className="title">{timeline.card_title} <span className="sub">{timeline.card_subtitle}</span> </h5>
        <div className="game-item-h">
          <div className="icon" style={{ backgroundImage: 'url(' + timeline.game_icon + ')' }} />
          <div>
            <div className="detail">
              <div>
                <h5 className="title">{timeline.game_title}</h5>
                <div>
                  <Button type="primary" outline={true} className="group-badge">{timeline.game_badge}</Button>
                </div>
                <div className="sub-title">
                  {timeline.game_subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const BasicRouter = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Main} />
    </div>
  </Router>
);

ReactDOM.render(<BasicRouter />, document.getElementById('root'));
