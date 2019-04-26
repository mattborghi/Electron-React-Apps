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
      <Plot
        data={[
          {            
            z: [[10, 10.625, 12.5, 15.625, 20],[5.625, 6.25, 8.125, 11.25, 15.625],[2.5, 3.125, 5.0, 8.125, 12.5],[0.625, 1.25, 3.125, 6.25, 10.625],
            [0, 0.625, 2.5, 5.625, 10]],
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
    );
  }
}

export default Contourplot;