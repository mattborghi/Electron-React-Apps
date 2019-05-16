import MathJax from 'react-mathjax2';
import React from 'react';

// const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'


class Ascii extends React.Component {

  render() {
    return (
        <div> 
            {/* style={{marginLeft: 100,}} */}
        {/* <h3>{this.props.title}</h3> */}
            <MathJax.Context input='ascii'>
                {/* <div> */}
                    <MathJax.Node>{this.props.ascii}</MathJax.Node>
                {/* </div> */}
            </MathJax.Context>
        </div>
    );
}

}
export default Ascii;