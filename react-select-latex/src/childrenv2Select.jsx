import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FullScreenDialog from './equation-creator';
// import MathJax from 'react-mathjax2';

// const BootstrapInput = withStyles(theme => ({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing.unit * 3,
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       width: 'auto',
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }))(InputBase);
  
//   const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing.unit,
//     },
//     bootstrapFormLabel: {
//       fontSize: 18,
//     },
//   });

// class CustomButton extends React.Component {
//   addElement = () => {
//     this.props.onClick(
//       Math.random()
//         .toString(36)
//         .substring(7) + "?"
//     );
//   };

//   render() {
//     return (
//       <div id="addQuestionButton">
//         <Button id="addQuestionButton" onClick={this.addElement} color="primary" variant="contained">
//           ADD
//         </Button>
//       </div>
//     );
//   }
// }


  
class SelectElem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //   age: '',
            elements: [10, 20, 30],
        };
    }
    
// callback function that gets info from child
addElement = element => {
    // Dont add the element if the equation is already in the list
    if (!this.state.elements.includes(element)) {
        this.setState(prevState => ({
            elements: [...prevState.elements, element]
        }));
    };
}

// handleChange = event => {
//   this.setState({ age: event.target.value });
// };

render() {
//   const { classes } = this.props;
    // let vars = 'a = b';
    return (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
    >
    {/* <form autoComplete="off">  */}
    {/* className={classes.root} */}
        {/* <FormControl > */}
        {/* className={classes.margin} */}
        {/* <InputLabel htmlFor="age-customized-native-simple" > */}
        {/* className={classes.bootstrapFormLabel} */}
            {/* Age
        </InputLabel> */}
        <NativeSelect
        //   value={this.state.age}
        //   onChange={this.handleChange}
        //   input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
            {/* <option></option> */}
            {/* <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option> */}
            {this.state.elements.map(elem => ( <option key={elem} value={elem}>{elem}</option> ))}
        </NativeSelect>

        {/* <NativeSelect>  
            <option key={vars} value={vars}>
            {vars}
            <MathJax.Context input='tex'>
                <div>
                <MathJax.Node inline>{'a = b'}</MathJax.Node>
                </div>
            </MathJax.Context>
            </option>
        </NativeSelect> */}

        {/* </FormControl> */}
    {/* </form> */}
    {/* <CustomButton onClick={this.addElement} /> */}
    <FullScreenDialog callbackFromParent={this.addElement} />
    </Grid>
    );
}
}
  
//   SelectElem.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default SelectElem; //withStyles(styles)(SelectElem) 