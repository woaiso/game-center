import * as React from 'react';
export default ({ hasHeader, current = 0 }) => (
  <div className={"nav-tab" + (hasHeader ? ' has-header' : '')}>
    <a href="javascript:;" className={"tab-item" + (current === 0 ? ' current' : '')}>
      排行榜
    </a>
    <a href="javascript:;" className={"tab-item" + (current === 1 ? ' current' : '')}>
      游戏库
    </a>
  </div>
)
