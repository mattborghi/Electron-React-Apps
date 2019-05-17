import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

class Contourplot extends React.Component {
  render() {

    var layout = {
      title: 'Heatmap', width: 800, height: 600,
      xaxis: {title: 'Number of Steps'},
      yaxis: {title: 'Number of Paths'}, 
    };

    return (   
      <div style={{paddingLeft: 50}} >      
      <Plot
        data={[
          {         
            x: [ 252, 819, 1386, 1953, 2520],
            y: [100., 200., 300., 400., 500.], 
            z: [[0.26520157, 0.67080426, 1.74721122, 1.450809  , 2.07481313], [0.60840416, 1.37280869, 2.24641442, 2.93281889, 3.77522397], [0.88920569, 2.2932148 , 3.18242049, 4.57082939, 5.88123775],
            [1.09200716, 3.05761933, 5.0700326 , 6.05283904, 6.19323945], [1.43520904, 3.51002264, 5.28843379, 5.14803314, 7.59724855]],
            type: 'contour',
            // type: 'heatmap',
            colorbar:{
              title: 'Computation Time (s)',
              titleside:'right',
              // len: 0.35,
              // tickvals:[0,50,100],
              // tickfont: {color: 'red'}
            }
          },          
        ]} 
        layout={ layout }
      />
      </div>
    );
  }
}

export default Contourplot;

