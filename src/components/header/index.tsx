import * as React from 'react';

import './header.less';
interface HeaderProps {
  title: string
}

export default class Header extends React.Component<HeaderProps, any>{
  render() {
    const { title } = this.props;
    return (
      <header className="header">
        <div className="header-title-wrap">
          <div className="header-title">{title}</div>
        </div>
      </header>
    );
  }
}
