import React from 'react';
import ReactDOM from 'react-dom';
import ReactTerminal from 'react-terminal-component';

class TerminalShell extends React.Component {
    render() {
      return (
        <div>
          <ReactTerminal/>
        </div>
      );
    }
  }

ReactDOM.render(<TerminalShell/>, document.getElementById("another-shell"))
