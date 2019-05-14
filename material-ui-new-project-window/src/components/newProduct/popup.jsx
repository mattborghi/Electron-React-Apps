import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IntegrationAutosuggest from './autosuggest.jsx'
import PlusLogo from '../../icons/PlusLogo'

export default class FormDialog extends React.Component {
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
    return (
      <div>
        <Button style={this.props.style.button} onClick={this.handleClickOpen}>
          <div style={this.props.style.div} ><PlusLogo fill={this.props.fill} style={this.props.logoClass} /></div>
          <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Create New Project</Typography>
        </Button >

        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Create Product
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={"sm"}
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title">New Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a product name:
            </DialogContentText>
            <IntegrationAutosuggest/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="secondary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}