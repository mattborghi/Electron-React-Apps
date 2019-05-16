import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  item: {
    marginBottom: 0,
  },
});

class NestedList extends React.Component {

  constructor(props){
    super(props);    
    this.state = {
      open: false,  
    };
  }

  handleClick = () => {
    let newState = !this.state.open
    this.setState(state => ({ open: newState }));
    // this.props.test(newState)
  };


  render() {
    const { classes } = this.props; 

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Tests and Contracts List</ListSubheader>}
        className={classes.root}
      >
        {/* <ListItem button>          
          <Checkbox/>
          <ListItemText inset primary="Sent mail" />
        </ListItem> */}

        <ListItem button onClick={this.handleClick} >
          <Checkbox/>
          <ListItemText inset primary="One Dimension" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}> 
              <Checkbox/>
              <ListItemText inset primary="Contract A" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick}>    
          <Checkbox/>
          <ListItemText inset primary="Contour" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>  
              <Checkbox/>
              <ListItemText inset primary="Contract A" />       
            </ListItem>
            <ListItem button className={classes.nested}>  
              <Checkbox/>
              <ListItemText inset primary="Contract B" />       
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick}>    
          <Checkbox/>
          <ListItemText inset primary="Comparison" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}> 
              <Checkbox/>
              <ListItemText inset primary="Contract C" />
            </ListItem>
          </List>
        </Collapse>

      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);