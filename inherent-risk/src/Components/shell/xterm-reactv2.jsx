import React from 'react';
// import ReactDOM from 'react-dom';
// import Draggable from 'react-draggable';
import { Terminal } from 'vscode-xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import 'xterm/dist/xterm.css';

// import './styles.css';

Terminal.applyAddon(fit);

class XTerminal extends React.PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     width: 800,
  //     height: 800,
  //   };
  // }

  componentDidMount(){
    this.runExample()
  }

  runExample() {
    if (this._xterm) {
      this._xterm.dispose();
    }
    const term = new Terminal({ fontSize: 12, });
    this._xterm = term;
    term.open(document.getElementById('xterm'));
    term.fit();
    term.writeln('');
    term.writeln('root@test:/# ls /dev');
    term.writeln('console  core  fd  full  mqueue  null  ptmx  pts  random  stderr  stdin  stdout  tty  urandom  zero');
    // crude way to manual demonstrate resize
    // window.setTimeout(() => this.resize(100, 100), 1500);
    // window.setTimeout(() => this.resize(300, 300), 1600);
    // window.setTimeout(() => this.resize(400, 400), 1700);
    // window.setTimeout(() => this.resize(500, 500), 1800);
    // window.setTimeout(() => this.resize(600, 600), 1900);
    // window.setTimeout(() => this.resize(700, 700), 2000);
    // window.setTimeout(() => this.resize(800, 800), 2100);
  }

  // resize(width, height) {
  //   this.setState({ width, height }, () => this._xterm.fit());
  // }

  render() {
    // const { width, height } = this.state;
    return (
      // <div className="App">
      //   <h1>Xterm.js Resize Bug Example</h1>
      //   <button style={{ fontSize: 24 }} onClick={() => this.runExample()}>
      //     Play Example
      //   </button>
      //   <p>
      //     There's a bug with the resizing of xterm where if you quickly resize the xterm window, it'll crash the
      //     renderer.
      //   </p>
      //   <p>
      //     Please click "Play Example" to see the behavior and please have the dev console open to see the error getting
      //     thrown.
      //   </p>
      //   <p>
      //     This behavior only occurs in v3.11 and NOT v3.10, which leads me to believe it may be the new text wrap
      //     feature?
      //   </p>
        // <div
        //   id="parent-container"
        //   style={{
        //     width,
        //     height,
        //     padding: '1em',
        //     background: '#333',
        //   }}
        // >
          <div id="xterm" style={{ height: '100%', width: '100%'}}/>
      //    </div>
      // </div>
    );
  }
}

export default XTerminal
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
