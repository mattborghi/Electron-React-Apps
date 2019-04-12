import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import ToolBox from './toolbox';
import TextField from '@material-ui/core/TextField';
import LaTeX from './block-latex';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    equation: '',
    eqLatex: <LaTeX tex=''/>,
    prevKeys: [],
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  
  addNewEquation = () => {
    // let eqLatex = <Example tex={this.state.equation} />
    // this.props.callbackFromParent(eqLatex);
    this.props.callbackFromParent(this.state.equation);
    this.handleClose();
  };

  modifyEquation = (key) => {
    // console.log(key)
    if(key === 'DEL'){
      // Remove prevKeys last element
      // splice(index, howmany)
      let removed = this.state.prevKeys
      let lastItem = removed.splice(-1,1)
      // Remove prevState from equation
      let indexOfString = this.state.equation.lastIndexOf(lastItem)
      // console.log(indexOfString)
      let eqSplit = this.state.equation.substring(0,indexOfString)
      // console.log('removing')
      // console.log(eqSplit)
      // console.log(removed)
      this.setState({
        equation: eqSplit,
        prevKeys: removed,
      });

    }else{
      var joined = this.state.prevKeys.concat(key);
      if(this.state.equation !== ''){
          // console.log('it is not empty')
            this.setState({
                equation: this.state.equation + key,
                prevKeys: joined,
            });
        }else{
          // console.log('empty')
            this.setState({
                equation: key,
                prevKeys: joined,
        });
        // event.target.value = this.state.equation;
      }; 
    } 
}

  appendEquation = (e) => {
    // console.log(this.state.equation)
    if(this.state.equation !== ''){
      // console.log('it is not empty')
        this.setState({
            equation: this.state.equation + e.target.value
        });
    }else{
      // console.log('empty')
        this.setState({
            equation: e.target.value
        });
    }
    // console.log(this.state.equation)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add new equation
        </Button>
        <Dialog
        //   fullScreen
          maxWidth="xl"
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Equation Creator
              </Typography>
              <Button color="inherit" onClick={this.addNewEquation}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          
            <Grid direction="row" container justify="space-evenly" alignItems="center">
            {/* Input text */}
            <Grid item xs={6}>
                <TextField 
                    style={{ margin: 8 }} 
                    variant="outlined" 
                    margin="normal" 
                    label="Create Equation" 
                    multiline
                    onChange={this.modifyEquation}
                    // className="inputtext"
                    // id="inputtext"
                    value={this.state.equation}
                />
            </Grid>
            {/* Toolbox */}
            <Grid item xs={3}>
                <ToolBox clickButton={this.modifyEquation}/>
            </Grid>
            </Grid>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);