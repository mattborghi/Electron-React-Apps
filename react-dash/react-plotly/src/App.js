import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);

class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 1024, height: 768, title: 'A Fancy Plot'} }
      />
    );
  }
}

export default App;

