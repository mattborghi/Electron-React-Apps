import React from 'react';
// We are importing d3 functions from modules
// There is no d3. prefix
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class BarChartv2 extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount = () => {
        this.createBarChart();
    }

    componentDidUpdate = () => {
        this.createBarChart();
    }

    createBarChart = () => {
        const node = this.node;
        const dataMax = max(this.props.data);
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]]);

        select(node)
            .selectAll('react')
            .data(this.props.data)
            .enter()
            .append('react')

        select(node)
            .selectAll('react')
            .data(this.props.data)
            .exit()
            .remove()
        
        select(node)
            .selectAll('react')
            .data(this.props.data)
            .style('fill', 'yellow')
            .attr('x', (d,i) => i*25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)            
    }

    render() {
        return(
            <svg ref={node => this.node = node}
                width={500} height={500} >
            </svg>
        );
    }

}

export default BarChartv2;