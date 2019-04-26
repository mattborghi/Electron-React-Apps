import React from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);

class DiffPlot extends React.Component {
  render() {
   
    // var layout = {
    //   // stackgroup:{[trace0, trace0]},
    //   title: 'My subplots',
    //   xaxis:  {domain: [0, 0.45]},
    //   xaxis2: {domain: [0.55, 1]},
    //   yaxis:  {domain: [0, .9]},
    //   yaxis2: {anchor: 'x2',domain: [0, .9]},
    //   annotations:[{
    //     text: "First subplot",
    //     font: {size: 16,color: 'green',},
    //     showarrow: false,
    //     align: 'center',
    //     x: 0,
    //     y: 1,
    //     xref: 'paper',
    //     yref: 'paper',
    //     },
    //     {
    //     text: "Second subplot",
    //     font: {size: 16,color: 'orange',},
    //     showarrow: false,
    //     align: 'center',
    //     x: 0.8,
    //     y: 1,
    //     xref: 'paper',
    //     yref: 'paper',
    //     }
    //   ]
    // };

    var trace1 = {
      x:[1, 2, 3],
      y:[2, 3, 4],
      name:'Difference'
    };

    var trace2 = {
      x:[1, 2, 3],
      y:[450, 700, 850],
      xaxis:'x',
      yaxis:'y3',
      name:'FairValue MC'
    };

    var trace3 = {
      x:[1, 2, 3],
      y:[600, 700, 800],
      xaxis:'x',
      yaxis:'y3',
      name:'FairValue FO'
    };

    // var trace4 = {
    //   x:[4000, 5000, 6000],
    //   y:[7000, 8000, 9000],
    //   xaxis:'x4',
    //   yaxis:'y4'
    // };

    var layout = {
      title: 'Comparison Plot', width: 800, height: 600,
      xaxis:  {domain: [0, 1], title: 'S0'},
      yaxis:  {domain: [0, 0.44], title: 'Difference'},
      // xaxis2: {domain: [0.55, 1]},
      // xaxis4: {anchor: 'y2',domain: [0.55, 1]},
      yaxis3: {domain: [0.5, 1], title: 'Fair Value'},
      // yaxis4: {anchor: 'x4',domain: [0.55, 1]},
      plot_bgcolor:"rgb(229,229,229)",
      paper_bgcolor:"rgb(256,256,256)"
      
    };

    return (      
      <Plot
        data={[trace1,trace2,trace3]}
        layout={ layout }          
      />
    );

  }
}
export default DiffPlot;

