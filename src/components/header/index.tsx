import * as React from 'react';

import './header.less';
interface HeaderProps {

}

export default class Header extends React.Component<HeaderProps, any>{
  render() {
    return (
      <header className="header">
        <div>
          <div className="header-title">Title</div>
        </div>
      </header>
    );
  }
}
