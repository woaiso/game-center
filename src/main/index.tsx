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

class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        Game Center

        </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
