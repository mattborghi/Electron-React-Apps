import React from 'react';
import Button from '@material-ui/core/Button';

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