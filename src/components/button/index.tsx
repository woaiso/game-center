import * as React from 'react';
import './button.less';

interface ButtonProps {
  type?: 'primary' | 'default',
  className?: string
  outline?: boolean
  size?: 'large' | 'small' | 'default'
}

export default class Button extends React.Component<ButtonProps, any>{
  render() {
    let { children, className = '', type = "default", outline = false, size } = this.props;
    if (type === 'primary') {
      className += ' button-primary'
    }
    if (outline) {
      className += ' button-outline';
    }
    if (size) {
      className += ' button-' + size
    } else {
      className += ' button-default';
    }
    return (
      <button type="button" className={className + ' button'}>{children}</button>
    );
  }
}
