import * as React from 'react';
export default (props) => (
  <div className={"nav-tab" + (props.hasHeader ? ' has-header' : '')}>
    <a href="javascript:;" className="tab-item current">
      排行榜
    </a>
    <a href="javascript:;" className="tab-item">
      游戏库
    </a>
  </div>
)
