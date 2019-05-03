import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: props => props.toggleFunc ? theme.palette.background.paper : 'white',
    // 
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  itemIcon: {
    color: props => props.textColor
    // props => this.props.textColor ? 'white' : 'black',
  },
});

class NestedList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
      // textColor: this.props.textColor
    };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
    console.log(this.props.textColor)
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
      <List
        component="nav"
        subheader={<ListSubheader component="div">Project</ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sent mail" primaryTypographyProps={{ color: this.props.textColor === '#ffffff' ? 'primary' : 'secondary'}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" primaryTypographyProps={{ color: this.props.textColor === '#ffffff' ? 'primary' : 'secondary'}} />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" primaryTypographyProps={{ color: this.props.textColor === '#ffffff' ? 'primary' : 'secondary'}} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon className={classes.itemIcon} >
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" primaryTypographyProps={{ color: this.props.textColor === '#ffffff' ? 'primary' : 'secondary'}} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);