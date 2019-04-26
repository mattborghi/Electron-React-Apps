import MathJax from 'react-mathjax2';
import React from 'react';

class Example4 extends React.Component {

  render() {
    return (
        <div style={{marginLeft: 100,}}>
        <h3>{this.props.title}</h3>
            <MathJax.Context input='tex'>
                <div>
                    This is an inline math formula: <MathJax.Node inline>{'a = b'}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}

}
export default Example4;