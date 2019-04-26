import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

class OneDimension extends React.Component {
  render() {

    var layout = {
      width: 800, height: 600, title: 'One Dimension', 
      xaxis: {title: 'S0'},
      yaxis: {title: 'Fair Value'}
    };

    return (      
      <Plot
        data={[
          { x: [1, 1.5, 3], y: [1, 1, 4], type: 'scatter', mode: 'lines+points', marker: {color: 'red'}, name:'K1'},
          { x: [1, 2, 3], y: [1, 1, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'blue'}, name:'K2'},
          // { x: [1, 2.5, 3], y: [1, 1, 2], type: 'scatter', mode: 'lines+points', marker: {color: 'green'}}
          // { x: [1, 2, 3], y: [2, 5, 3], type: 'line',},
        ]}
        layout={ layout }
      />

    );
  }
}

export default OneDimension;
