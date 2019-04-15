import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
    
    drawChart() {
        // Data to visualize
        const data = this.props.data;
        const svg = d3.select('body')
                      .append('svg')
                      .attr('width', this.props.width)
                      .attr('height', this.props.height)
                      .style('margin-left', 100);

        svg.selectAll('react')
        .data(data)
        .enter()
        .append('react')
        .attr('x', (d,i) => i*70)
        .attr('y', (d,i) => this.props.height - 10*d)
        .attr('width', 25)
        .attr('height', (d,i) => d*10)
        .attr('fill', 'green');
        
    };
    // use componentDidMount to display barchart whent the component has been mounted in the DOM.
    componentDidMount() {
        this.drawChart();
    };

    render() {
        return (
            <div id={"#" + this.props.id}></div>
        );
    }


}

export default BarChart;