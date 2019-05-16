import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

class OneDimension extends React.Component {
  render() {

    var layout = {
      width: 800, height: 600, title: 'One Dimension', 
      xaxis: {title: 'S0'},
      yaxis: {title: 'Fair Value'},
      plot_bgcolor:"rgb(229,229,229)",
      paper_bgcolor:"rgb(256,256,256)"
    };

    return (  
      <div style={{paddingLeft: 100}} >   
      <Plot
        data={[
          { x: [50, 72.22222222, 94.44444444, 116.66666667, 138.88888889, 161.11111111, 183.33333333, 205.55555556, 227.77777778, 250], 
            y: [0.0, 0.0, 0.0, 16.73833121771799, 38.88123549050816, 61.0813748758394, 83.38240407978085, 105.51181181294464, 127.84557283550382, 150.02284400825397], 
            type: 'scatter', mode: 'lines+points', marker: {color: 'red'}, name:'K = 100'},
          { x: [50, 72.22222222, 94.44444444, 116.66666667, 138.88888889, 161.11111111, 183.33333333, 205.55555556, 227.77777778, 250], 
            y: [0.0, 0.0, 0.0, 0.0, 18.877755640385544, 41.21867213775653, 63.31391263995924, 85.58986738912809, 107.8651020477159, 130.01272712472138], 
            type: 'scatter', mode: 'lines+points', marker: {color: 'blue'}, name:'K = 120'},
        ]}
        layout={ layout }
      />
      </div>
    );
  }
}

export default OneDimension;
