import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from 'terminal-in-react';

class TerminalShell extends React.Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
          commandPassThrough={cmd => `-PassedThrough:${cmd}: command not found`}
        />
      </div>
    );
  }
}

ReactDOM.render(<TerminalShell/>, document.getElementById("terminal-shell"))
