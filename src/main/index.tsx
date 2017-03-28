import * as React from 'react';
import * as ReactDOM from 'react-dom';

import WeUI from 'react-weui';

//import styles
import 'weui/src/style/weui.less';
import 'react-weui/lib/react-weui.min.css';

const {Button} = WeUI;


class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        Game Center
        <Button>hello wechat</Button>
        </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
