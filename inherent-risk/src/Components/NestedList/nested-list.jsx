import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
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

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
    color: styledBy('isToggled', {
      false: 'white',
      true: '#424242'
    }), 
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  icon:  { color: styledBy('isToggled', {
        false: '#ffffff',
        true: '#424242'
  }), 
  },
  item:  { color: styledBy('isToggled', {
    false: 'primary',
    true: 'secondary'
  }), 
  },
  title:  { color: styledBy('isToggled', {
    false: 'rgb(200,200,200)',
    true: 'grey'
}), 
  fontWeigth: 'bold',
  fontSize: 14,
  textTransform: 'uppercase'
},
}


function NestedList(props) {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     open: true,
  //   };
  // }
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    // this.setState(state => ({ open: !state.open }));
    setOpen(!open)
  };

  // render() {
    // const { classes } = props
    // const classes = useStyles(props.isToggled);
    const { classes, isToggled, ...other } = props
    // this.props;
    // console.log()
    return (
      <div className={classes.root} {...other} > 
      {/* style={{ color: isToggled ? '#424242' : 'white'}} */}
        {/* style={{backgroundColor: this.props.bgColor, color: this.props.textColor}} */}
      <List
        component="nav"
        subheader={<ListSubheader component="div" className={classes.title}>Project</ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText inset primary="Sent mail" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary'}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder className={classes.icon} />
              </ListItemIcon>
              <ListItemText inset primary="Starred" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      </div>
    );
  // }
}

// NestedList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NestedList);
// export default NestedList