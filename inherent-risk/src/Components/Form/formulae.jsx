import React, { Component } from 'react';
// import DropdownMultiple from './components/DropdownMultiple.jsx';
import Dropdown from './Dropdown.jsx';
import Grid from '@material-ui/core/Grid';
import FullScreenDialog from './equation-creator';


class FormulaeElem extends Component {
    constructor(){
    super()
    this.state = {
      equations: [
        {
          id: 0,
          title:  'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))',
           //'\\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi',
          selected: false,
          key: 'equations'
        },
        {
          id: 1,
          title: 'MF*sum(Increasers)',
          selected: false,
          key: 'equations'
        },
        {
          id: 2,
          title: 'MF*sum(Increasers^2)',
          selected: false,
          key: 'equations'
        },
        {
          id: 3,
          title: 'sqrt(MF^2*sum(Increasers^2))',
          selected: false,
          key: 'equations'
        },
        {
          id: 4,
          title: '1/2*sqrt(MF^2*sum(Increasers^2))',
          selected: false,
        }
      ]
    }
  }

  resetThenSet = (id, key) => {
    // console.log(id,key)
    // Get a copy of the whole equations' state
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    // Set all elements to unselected
    temp.forEach(item => item.selected = false);
    // Just set the one we need
    temp[id].selected = true;
    // Rewrite the equations' state
    this.setState({
      [key]: temp
    })
  }

  addElement = (equation) => {
    // console.log(element)
    let key = "equations"
    // console.log(this.state.equations.length)
    // The new element id
    let id = this.state.equations.length;
    // Get a copy of the whole equations' state
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    // Dont add the element if the equation is already in the list
    let exit = false;
    for(var i=0;i<this.state.equations.length;i++){
      if(this.state.equations[i].title === equation){
        exit = true;
      }
    }

      if (!exit){
      // Set all elements to unselected
      temp.forEach(item => item.selected = false);
      // Copy the last element
      let item = JSON.parse(JSON.stringify(temp[id-1]))
      // Rewrite with our equation info
      item.id = id;
      item.title = equation;
      item.selected = true;
      // Now append it to the old state
      temp[id] = item;
      // console.log(temp)
      // Set as the new state
      this.setState({
        [key]: temp
      });
      // console.log(temp)
    }
    }
 


    // Dont add the element if the equation is already in the list
    // if (!this.state.elements.includes(element)) {
    //     this.setState(prevState => ({
    //         elements: [...prevState.elements, element]
    //     }));
    // };

  render() {
    return (
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
        >
        <Grid item xs={9}>
          <Dropdown
            title="Select Equation"
            list={this.state.equations}
            resetThenSet={this.resetThenSet}
          />
        </Grid>
        <Grid item xs={3}>
          <FullScreenDialog callbackFromParent={this.addElement} />
        </Grid>
       </Grid>
    );
  }
}

export default FormulaeElem;