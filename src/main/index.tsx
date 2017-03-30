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
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
