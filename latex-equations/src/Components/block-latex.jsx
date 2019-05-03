import MathJax from 'react-mathjax2';
import React from 'react';
// import './App.css';
const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`
// const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$${ascii}$$`
// console.log(content)

class Example5 extends React.Component {

  render() {
    return (
        <div style={{marginLeft: 100,}}>
        <h3>{this.props.title}</h3>
            <MathJax.Context input='tex'>
                <div>
                    <MathJax.Node>{tex}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}

}
export default Example5;