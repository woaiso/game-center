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
    let configClassName = '';
    if (type === 'primary') {
      configClassName += ' button-primary';
    }
    if (outline) {
      configClassName += ' button-outline';
    }
    if (size) {
      configClassName += ' button-' + size;
    } else {
      configClassName += ' button-default';
    }
    return (
      <button type="button" className={className + configClassName + ' button'}>{children}</button>
    );
  }
}
