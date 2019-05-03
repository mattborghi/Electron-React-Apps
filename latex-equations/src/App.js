import MathJax from 'react-mathjax2';
import React from 'react';
import './App.css';

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$${ascii}$$`
console.log(content)

class Example extends React.Component {

  render() {
    return (
      <div style={{marginLeft: 100,}}>
        <h3>{this.props.title}</h3>
        <MathJax.Context
            input='ascii'
            onLoad={ () => console.log("Loaded MathJax script!") }
            onError={ (MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                  MathJax.Hub.Typeset()
                );
            } }
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
            options={ {
                asciimath2jax: {
                     useMathMLspacing: true,
                     delimiters: [["$$","$$"]],
                     preview: "none",
                }
            } }
        >
            <MathJax.Text text={ content }/>
        </MathJax.Context>
      </div>
    );
}

}
export default Example;