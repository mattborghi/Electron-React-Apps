import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormLabel from '@material-ui/core/FormLabel';
// import Gooey from './Gooey/gooey.jsx';
import TemplateSelector from '../TemplateSelector/template-selector.jsx'
import LoupeIcon from '../icons/loupe.jsx'

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
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Select Template
        </Button>
        {/* <Button onClick={this.handleClickOpen}>
          <LoupeIcon fill={this.props.fill}/>
        </Button> */}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} color="secondary">
            <Toolbar>
              <IconButton color="primary" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="primary" className={classes.flex}>
                Template Selector
              </Typography>
              <Button color="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
                {/* <div class="row"> */}
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh",flexDirection: 'column',}}>
                    <div>
                      <TemplateSelector />
                      {/* <Gooey color={this.props.color}/> */}
                    </div>

                    {/* <div style={{marginTop: 100,}}>
                      <FormLabel>
                        <h3><strong>You have completed 70% of the project!.</strong></h3>  
                      </FormLabel>
                    </div> */}
                    
                  </div>
                {/* </div> */}
                
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);