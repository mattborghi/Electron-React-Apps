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
  nested3: {
    paddingLeft: theme.spacing.unit * 12,
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
  const [openProduct, setOpenProduct] = useState(false)
  const [openContracts, setOpenContracts] = useState(false)
  const [openTests, setOpenTests] = useState(false)
  const [openBenchmarking, setOpenBenchmarking] = useState(false)
  const [openConvergence, setOpenConvergence] = useState(false)
  const [openLimitingCase, setOpenLimitingCase] = useState(false)

  const handleClickMain = () => {
    setOpenMain(!openMain)
  };

  const handleClickProduct = () => {
    setOpenProduct(!openProduct)
  };

  const handleClickContracts = () => {
    setOpenContracts(!openContracts)
  };

  const handleClickTests = () => {
    setOpenTests(!openTests)
  };

  const handleClickBenchmarking = () => {
    setOpenBenchmarking(!openBenchmarking)
  };

  const handleClickLimitingCase = () => {
    setOpenLimitingCase(!openLimitingCase)
  };

  const handleClickConvergence = () => {
    setOpenConvergence(!openConvergence)
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
                      <ListItem button className={classes.nested2} disabled>
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="BasketAsianOption" />
                      </ListItem>
                      
                      {/* Finish with items inside Product */}
                    </List>
                  </Collapse>
                  {/* End folder Product */}

              {/* Contracts */}
              <ListItem button onClick={handleClickContracts} className={classes.nested} >
                <ListItemIcon>
                  {openContracts ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary="Contracts" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openContracts ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

                  {/* Inside Folder Contract */}
                  <Collapse in={openContracts} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* First file */}
                      <ListItem button className={classes.nested2} disabled>
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract A" />
                      </ListItem>
                      {/* Second file */}
                      <ListItem button className={classes.nested2} disabled>
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract B" />
                      </ListItem>
                      {/* Third file */}
                      <ListItem button className={classes.nested2} disabled>
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract C" />
                      </ListItem>
                      
                      {/* Finish with items inside Contracts */}
                    </List>
                  </Collapse>
                  {/* End folder Contract */}

              {/* Tests */}
              <ListItem button onClick={handleClickTests} className={classes.nested} >
                <ListItemIcon>
                  {openTests ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary="Tests" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openTests ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              {/* Inside Tests folder */}
              <Collapse in={openTests} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
              {/* Benchmarking */}
              <ListItem button onClick={handleClickBenchmarking} className={classes.nested2} >
                <Checkbox />
                <ListItemIcon>
                  {openBenchmarking ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary="Benchmarking" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openBenchmarking ? <ExpandLess /> : <ExpandMore />}
              </ListItem>


                    {/* Inside Folder Benchmarking */}
                      <Collapse in={openBenchmarking} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {/* First file */}
                          <ListItem button className={classes.nested3}>
                            <Checkbox />
                            <ListItemIcon>
                              <DocLogo className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText inset primary="Contract C" />
                          </ListItem>                                        
                          {/* Finish with items inside Limiting Case */}
                        </List>
                      </Collapse>
                      {/* End folder Benchmarking */}

              {/* Limiting Case */}
              <ListItem button onClick={handleClickLimitingCase} className={classes.nested2} >
                <Checkbox />
                <ListItemIcon>
                  {openLimitingCase ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary=" Limiting Case" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openLimitingCase ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

                 {/* Inside Folder Limiting Case */}
                  <Collapse in={openLimitingCase} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* First file */}
                      <ListItem button className={classes.nested3}>
                        <Checkbox />
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract A" />
                      </ListItem>
                      {/* Second file */}
                      <ListItem button className={classes.nested3}>
                        <Checkbox />
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract B" />
                      </ListItem>
                                          
                      {/* Finish with items inside Limiting Case */}
                    </List>
                  </Collapse>
                  {/* End folder Limiting Case */}

              {/* Convergence */}
              <ListItem button onClick={handleClickConvergence} className={classes.nested2} >
                <Checkbox />
                <ListItemIcon>
                  {openConvergence ? <FolderLogo className={classes.icon} /> : <ClosedFolderLogo className={classes.icon} /> }
                </ListItemIcon>
                
                <ListItemText inset primary="Convergence" primaryTypographyProps={{ color: isToggled ? 'secondary' : 'primary' }} />
                {openConvergence ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

                  {/* Inside Folder Convergence */}
                  <Collapse in={openConvergence} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* First file */}
                      <ListItem button className={classes.nested3}>
                        <Checkbox />
                        <ListItemIcon>
                          <DocLogo className={classes.icon}/>
                        </ListItemIcon>
                        <ListItemText inset primary="Contract C" />
                      </ListItem>                                          
                      {/* Finish with items inside Convergence */}
                    </List>
                  </Collapse>
                  {/* End folder Convergence */}

                      
                {/* Finish with items inside Tests */}
              </List>
            </Collapse>
                  
              {/* Finish with items inside folder */}

            </List>
          </Collapse>
          {/* End folder Main */}

          
          

          

      </List>
    );

}

export default withStyles(styles)(NestedList);