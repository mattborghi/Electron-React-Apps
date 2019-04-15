import React, { Component } from 'react';
// import BarChart from './BarChart';
import BarChartv2 from './BarChartv2';

class App extends Component {
  state = {
    data: [12, 5, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'root',
  }
  render() {
    return (
      <div className="App">
        {/* <BarChart data={this.state.data} height={this.state.height} width={this.state.height} id={this.state.id} /> */}
        <div className="App-header">
          <h2>D3 Dashboard</h2>
        </div>
        <div>
          <BarChartv2 data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    );
  }
}

export default App;
