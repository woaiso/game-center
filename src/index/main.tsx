import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './../components/header';
import Button from './../components/button';

import { gamelist, timelines } from './data';
const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');


const GameItem = ({ gameItem }) => (
  <li className="item">
    <div className="icon" style={{ backgroundImage: 'url(' + gameItem.icon + ')' }} />
    <span className="name">
      {gameItem.text}
    </span>
  </li>
);



export const Game = ({ game }) => (
  <section className="g-item">
    <div className="title">
      <span>{game.title}</span>
      {game.more ? <a className="more-link pull-right" href={game.more}>查看详情</a> : null}
    </div>
    <div className="game-list">
      <ul>
        {game.games.map((item, index) => <GameItem gameItem={item} key={index} />)}
      </ul>
    </div>
  </section>
);

const HotGameItem = ({ gameItem, key }) => (
  <div className={"hot-game-item"}>
    <span className="badge" />
    <div className="icon" style={{ backgroundImage: 'url(' + gameItem.icon + ')' }} />
    <div className="name">{gameItem.text}</div>
    <div className="sub-text">{gameItem.sub_text}</div>
    <Button>打开</Button>
  </div>
);

export const HotGame = ({ game }) => (
  <section className="g-item hot-game-section">
    <div className="title">
      <span>{game.title}</span>
      <a className="more-link pull-right" href={game.more}>更多</a>
    </div>
    <div className="hot-games">
      {game.games.map((item, index) => <HotGameItem gameItem={item} key={index} />)}
    </div>
  </section>
);

export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div className="page">
        <Header title="我的游戏" />
        <div className="content">
          <div className="fixed-content" />
          <div className="scroll-content">
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
