import * as React from 'react';
import './button.less';

interface ButtonProps {
  type?: 'primary' | 'default',
  className?: string
  outline?: boolean
}

export default class Button extends React.Component<ButtonProps, any>{
  render() {
    let { children, className = '', type = "default", outline = false } = this.props;
    if (type === 'primary') {
      className += ' button-primary'
    }
    if (outline) {
      className += ' button-outline';
    }
    return (
      <button type="button" className={className + ' button'}>{children}</button>
    );
  }
}
