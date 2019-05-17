import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);

class Comparisonplot extends React.Component {
  render() {

    var layout = {
      width: 800, height: 600, title: 'Comparison Plot', 
      xaxis: {title: 'S0'},
      yaxis: {title: 'Fair Value'}
    };
    return (   
      <div style={{paddingLeft: 50}} >      
      <Plot
        data={[ 
          { x: [1, 2, 3, 4], y: [1, 1, 2, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} , name:'FairValue MC'},
          { x: [1, 2, 3, 4], y: [1, 1, 1, 1], type: 'scatter', mode: 'lines+points', marker: {color: 'blue'}, name:'FairValue FO'},
        ]}
        layout={ layout }
      />
      </div>
    );
  }
}

export default Comparisonplot;