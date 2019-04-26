import MathJax from 'react-mathjax2';
import React from 'react';
// import './App.css';
const ascii2 = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
// const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$${ascii}$$`
// console.log(content)

class Example2 extends React.Component {

  render() {
    return (
        <div style={{marginLeft: 100,}}>
        <h3>{this.props.title}</h3>
            <MathJax.Context input='ascii'>
                <div>
                    This is an inline formula written in AsciiMath: <MathJax.Node inline>{ ascii2 }</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}

}
export default Example2;