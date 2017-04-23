import * as React from 'react';
import Header from './../components/header';
import Button from './../components/button';

const head_bg = require('./../images/head_bg.png');
const head = require('./../images/head.png');
const exampleIcon = require('./../images/game_01.png');
const noData = require('./../images/failed_to_load.png');


const tabs = [
  {
    text: '手游',
    href: 'javascript:;'
  },
  {
    text: '页游',
    href: 'javascript:;',
    active: true
  }
]

export default () => (
  <div className="page">
    <Header tabs={tabs} />
    <div className="content white">
      <div className="fixed-content" />
      <div className="scroll-content">
        <div className="no-data-wrap">
          <div className="box">
            <img src={noData} className="no-data" />
            <div className="text">加载失败，点击屏幕重新加载 </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
