import * as React from 'react';
import Header from './../components/header';
import Button from './../components/button';

const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');
const noData = require('./../images/no_data.png');

export default () => (
  <div className="page">
    <Header title="我的游戏" />
    {/*头部区域*/}
    <div className="head-content" style={{ backgroundImage: 'url(' + head_bg + ')' }}>
      <div className="head-inner">
        <img src={head} className="user-head" />
        <span className="user-text">侞果僾不篱</span>
      </div>
      {/*中间内容区*/}
      <div className="no-data-wrap">
        <img src={noData} className="no-data" />
        <div className="text">没有最近的游戏记录哟 </div>
        <Button size="large">立刻去玩</Button>
      </div>
    </div>
  </div>
);
