import React from 'react';
// import ReactDOM from 'react-dom';
import Terminal from 'terminal-in-react';

export default function TerminalSh() {
  const showMsg = () => 'Type `help` for more info.'

  // render() {
    return (
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // height: "100vh",
          width: "100vh",
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert',
          }}
          msg='Type `help` for more info.'
          commandPassThrough={cmd => `-PassedThrough:${cmd}: command not found`}
          showActions={false}
          hideTopBar={true}
          allowTabs={true}
        />
      </div>
    );
  }
// }

// ReactDOM.render(<TerminalShell/>, document.getElementById("terminal-shell"))
