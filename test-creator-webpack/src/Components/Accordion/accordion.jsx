import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import styled from 'styled-components'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
// Icons
import MoveWindowIcon from '../icons/move-window.jsx'
import SaveFileIcon from '../icons/save-file.jsx'
import CalculateIcon from '../icons/calculate.jsx'
import ContractIcon from '../icons/contract.jsx'
import CloudComputingLogo from '../icons/cloud-computing.jsx'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import FolderIcon from '@material-ui/icons/Folder'
import SaveIcon from '@material-ui/icons/Save'
import FindInPageIcon from '@material-ui/icons/FindInPage'
import TimelineIcon from '@material-ui/icons/Timeline'
import Icon from '@mdi/react'
import { mdiFile } from '@mdi/js'
// List
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

// const black="#424242"
const white="#ffffff"
const grey = "rgb(200,200,200)"

const StyledButton = styled(Button)`
  color: ${props => props.text};
  display: block;
  width: 100%;
  border: none;
  background : ${props => props.color};
  height: 50px;
`;

const styles = {
  root: {
    textTransform: "none",
  },
  bottom: {
    textTransform: "none",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  icon: {
    width: 15,
    height: 15,
    // marginBottom: -2
  },
  inline: {
    display: 'inline',
  },
  lista: {
    width: '100%',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    color: 'white'
  },
}

function CustomizedExpansionPanel(props) {

  const {classes} = props
  const [isMoved, setIsMoved] = useState(false)
  const [nextPaneCounter, setNextPaneCounter] = useState(0)

  function movePane() {
    let newValue = !isMoved
    setIsMoved(newValue)
    props.movingButtons(newValue);
  }

  function nextPaneFunc() {
    let newValue = nextPaneCounter + 1
    if (newValue > 7) {
      newValue = 0
    }
    setNextPaneCounter(newValue)
    props.nextPane(newValue);
  }

  return (
    <div>
      {/* Title */}
      <ListSubheader component="div" style={{color: grey,}} >
          CONTROLS
      </ListSubheader>

      {/* Buttons */}
      <List className={classes.lista}>
       
       <ListItem alignItems="flex-start" button={true} >
        {/* <ListItemAvatar > */}
          <SaveIcon color="primary" />
        {/* </ListItemAvatar> */}
        <ListItemText primary="Save" />
      </ListItem>

      <ListItem alignItems="flex-start" button={true}>
        {/* <ListItemAvatar > */}
          <FolderIcon color="primary" />
        {/* </ListItemAvatar> */}
        <ListItemText primary="Load" />
      </ListItem>

      <ListItem alignItems="flex-start" button={true}>
        {/* <TimelineIcon color="primary" /> */}
        <Icon path={mdiFile}
          size={1}
          // horizontal
          // vertical
          // rotate={90}
          color="white"
          // spin
        />
        
        <ListItemText primary="New" />
      </ListItem>

      <ListItem alignItems="flex-start" button={true}>
        {/* <ListItemAvatar> */}
        <FindInPageIcon color="primary" />
          {/* <ContractIcon fill={white} /> */}
        {/* </ListItemAvatar> */}
        <ListItemText primary="Create Test Plan" />
      </ListItem>

      <ListItem alignItems="flex-start" button onClick={() => nextPaneFunc()}>
        {/* <ListItemAvatar> */}
          <ArrowForwardIosIcon color="primary" />
        {/* </ListItemAvatar> */}
        <ListItemText primary="Test Runner" />
      </ListItem>
     
    
  
      {/* <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><CloudComputingLogo fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Load</Typography>
      </StyledButton> */}

      {/* <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><CalculateIcon fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Calculate Risk</Typography>
      </StyledButton> */}

      {/* <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><ContractIcon fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Generate Report</Typography>
      </StyledButton> */}

      {/* Next */}
      {/* <StyledButton onClick={() => nextPaneFunc()} >
        <div style={{paddingRight: 25, marginTop: 4,}} ><ArrowForwardIosIcon fill={white}/></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Next</Typography>
      </StyledButton> */}
      

      {/* Move pane button */}
      {/* <StyledButton onClick={() => movePane()} style={{position: "absolute", bottom: 0, left: 0}}>
        <div style={{paddingRight: 25, marginTop: 4,}} ><MoveWindowIcon fill={white} className={classes.icon}/></div>
        <Typography style={{textTransform: "none", fontSize: 15, fontFamily: 'Open Sans',}}>Move Pane</Typography>
      </StyledButton> */}
    </List>
    </div>
    
  );
}

export default withStyles(styles)(CustomizedExpansionPanel);