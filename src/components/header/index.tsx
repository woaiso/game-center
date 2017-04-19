import * as React from 'react';

interface HeaderProps {
  title?: string,
  tabs?: any[]
}

export default class Header extends React.Component<HeaderProps, any>{
  render() {
    const { title, tabs } = this.props;
    let headTabs;
    if (tabs) {
      headTabs = (
        <div className="buttons-row">
          {tabs.map((tab, index) => <a key={index} href={tab.href} className={"button tab-link" + (tab.active ? ' active' : '')}>{tab.text}</a>)}
        </div>
      );
    }
    return (
      <header className="header">
        <div className="header-inner">
          <a href="javascript:;" className="back-button" />
          <div className="header-title-wrap">
            {title ? <div className="header-title">{title}</div> : null}
            {headTabs}
          </div>
        </div>
      </header>
    );
  }
}
