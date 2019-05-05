import * as React from 'react';
// import { render } from 'react-dom';
import { XTerm, Terminal } from "react-xterm";
import {ResizableBox} from 'react-resizable';
import * as throttle from 'lodash.throttle';
import './xterm.css'

interface IState {
}
interface IProps {
}
interface IRefs {
  [k: string]: any;
  xterm: XTerm;
}

export default class XTerminal extends React.Component<IProps, IState> {
  
  constructor(props?: IProps, context?: any) {
    super(props, context);
  }
  componentDidMount() {
    runFakeTerminal(this.refs.xterm);
  }
  componentWillUnmount() {
    this.refs.mainDeviceComponent.componentWillUnmount();
  }

  refs: IRefs
  throttleConsoleResize = throttle((size?) => {
    this.refs.xterm && this.refs.xterm.fit();
  }, 50)
  render() {
    return( 
    <div style={{width:'100%', height: '100%'}}>
      <ResizableBox width={200} height={200} onResize={this.throttleConsoleResize} style={{
        overflow: 'hidden'
      }} >
        <XTerm ref='xterm' style={{
          addons:['fit', 'fullscreen', 'search'],
          overflow: 'hidden',
          position: 'relative',
          width: '90%',
          // height: '100%'
        }} />
      </ResizableBox>
    </div>
    );
  }
}

function runFakeTerminal(xterm: XTerm) {
  const term: Terminal = xterm.getTerminal();
  var shellprompt = '$ ';

  function prompt () {
    xterm.write('\r\n' + shellprompt);
  };
  xterm.writeln('Welcome to xterm.js');
  xterm.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
  xterm.writeln('Type some keys and commands to play around.');
  xterm.writeln('');
  prompt();

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.ctrlKey && !ev.metaKey
    );

    if (ev.keyCode === 13) {
      prompt();
    // } else if (ev.keyCode == 8) {
    //   // Do not delete the prompt
    //   if (term['x'] > 2) {
    //     xterm.write('\b \b');
    //   }
    } else if (printable) {
      xterm.write(key);
    }
  });

  term.on('paste', function (data, ev) {
    xterm.write(data);
  });
}