import * as React from 'react';
import Header from './../components/header';
import { Page, Content, Slider } from './container';
import { Game, HotGame } from './main';
import GameList from './GameList';
import Tab from './../components/tab';
import { gamelist, hotGame } from './data';
import { GameItem, Star } from './GameList';
import Button from './../components/button';

/**
 * 游戏详情
 */

const poster = require('./../images/background.png')

const Video = () => (
  <div className="video-player">
    <div className="poster" style={{ backgroundImage: 'url(' + poster + ')' }} />
    <div className="play-button" />
    <div className="play-overlay" />
    <video />
  </div>
);


export default class Detail extends React.Component<any, any> {
  render() {
    const game = {
      title: '大家还喜欢',
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
    return (
      <Page>
        <Header />
        <Content>
          <div className="detail-content">
            <Video />
            <div className="detail-info">
              <div className="text-info">
                <div className="title">
                  洋果子店ROSE
            </div>
                <div className="stars">
                  <Star />
                </div>
                <div className="group-badge">
                  <Button type="primary" outline={true}>策略类</Button>
                  <Button type="primary" outline={true}>3D</Button>
                  <Button type="primary" outline={true}>情怀</Button>
                  <span className="badge-text">134万人在线玩</span>
                </div>
                <div className="sub-title">
                  厂商：腾讯游戏
            </div>
              </div>
              <a href="javascript:;"><Button type="primary" size="large" className="go-play-button">去玩</Button></a>
            </div>
            <div className="detail-swiper">
              <div className="swiper-title">
                游戏截图
            </div>
              <div className="swiper-images">
                <img src={require('./../images/swiper_1.png')} />
                <img src={require('./../images/swiper_2.png')} />
                <img src={require('./../images/swiper_3.png')} />
                <img src={require('./../images/swiper_4.png')} />
              </div>
            </div>
            <div className="detail-summary">
              <div className="summary-title">
                游戏简介
            </div>
              <div className="summary-content">
                《王者荣耀》是由腾讯游戏开发并运行的1一款运营在Android、IOS平台上的MOBA类手游，w于2015年11月26日在Android、IOS平台上正w式公测，游戏前期使用名称有《英雄战迹》、《王者联盟》1
            </div>
            </div>
            <div className="detail-summary">
              <div className="summary-title">
                详细信息
            </div>
              <div className="summary-content">
                下载量：45万人安装<br />
                更新：2017-2-14<br />
                大小：90.5M<br />
                版本：1.11.0<br />
                要求：Android4.1以上<br />
              </div>
            </div>
            <div className="game-content">
              <Game game={game} />
            </div>
          </div>
          <a className="download-link">
            下载
          </a>
        </Content>
      </Page>
    );
  }
}
