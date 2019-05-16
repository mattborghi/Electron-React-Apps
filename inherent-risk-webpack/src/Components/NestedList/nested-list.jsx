import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import FolderLogo from '../icons/open-folder.jsx'
import ClosedFolderLogo from '../icons/closed-folder.jsx'
import DocLogo from '../icons/doc-logo.jsx'
import Checkbox from '@material-ui/core/Checkbox';

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
    color: styledBy('isToggled', {
      false: 'white',
      true: '#424242'
    }), 
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  nested2: {
    paddingLeft: theme.spacing.unit * 8,
  },
  icon:  { 
    color: styledBy('isToggled', {
        false: 'white',
        true: '#424242'
  }), 
  },
  item:  { 
    color: styledBy('isToggled', {
    false: 'primary',
    true: 'secondary'
  }), 
  },
  title:  { 
    color: styledBy('isToggled', {
      false: 'rgb(200,200,200)',
      true: 'grey'
    }), 
    fontWeigth: 'bold',
    fontSize: 14,
    textTransform: 'uppercase'
  },
}


function NestedList(props) {

  const [openMain, setOpenMain] = useState(true)
  const [openProduct, setOpenProduct] = useState(true)

  const handleClickMain = () => {
    setOpenMain(!openMain)
  };

  const handleClickProduct = () => {
    setOpenProduct(!openProduct)
  };
  
    const { classes, isToggled } = props

    return (

      <List
        component="nav"
        subheader={<ListSubheader component="div" className={classes.title}>Project</ListSubheader>}
        className={classes.root}
      >
        {/* Begin folder Main */}
        <ListItem button onClick={handleClickMain} >
          <ListItemIcon>
            {openMain ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
          </ListItemIcon>
          
          <ListItemText inset primary="Basket Asian Option" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
          {openMain ? <ExpandLess /> : <ExpandMore />}
          </ListItem>


          {/* Inside Folder Main */}
          <Collapse in={openMain} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Product */}
              <ListItem button onClick={handleClickProduct} className={classes.nested} >
                <ListItemIcon>
                  {openProduct ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary="Product" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openProduct ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

                  {/* Inside Folder Product */}
                  <Collapse in={openProduct} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* First file */}
                      <ListItem button className={classes.nested2}>
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="BasketAsianOption" />
                      </ListItem>
                      
                      {/* Finish with items inside Product */}
                    </List>
                  </Collapse>
                  {/* End folder Product */}

            </List>
          </Collapse>
          {/* End folder Main */}

          
          

          

      </List>
    );

}

export default withStyles(styles)(NestedList);