import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AutoSizer } from 'react-virtualized';

const mystyle = {
    width: 100,
}

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      
        <div style={mystyle}>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        <Button>scroll=paper</Button>
        <Button>scroll=body</Button>
        </div>
        
    );
  }
}

export default ScrollDialog;