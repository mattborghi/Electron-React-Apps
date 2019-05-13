import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import styled from 'styled-components'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import MoveWindowIcon from '../icons/move-window.jsx'
import SaveFileIcon from '../icons/save-file.jsx'
import CalculateIcon from '../icons/calculate.jsx'
import ContractIcon from '../icons/contract.jsx'
import CloudComputingLogo from '../icons/cloud-computing.jsx'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

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
  marginBottom: -2
}
}

function CustomizedExpansionPanel(props) {

  const {classes} = props
  const [isMoved, setIsMoved] = useState(false)
  const [nextPane, setNextPane] = useState(false)

  function movePane() {
    let newValue = !isMoved
    setIsMoved(newValue)
    props.movingButtons(newValue);
    console.log(props.currentPage)
  }

  function nextPaneFunc() {
    let newValue = !nextPane
    setNextPane(newValue)
    props.nextPane(newValue);
  }

  return (
    <div>
      <ListSubheader 
          component="div" 
          style={{color: grey,}}
      >
          CONTROLS
      </ListSubheader>
      {/* Buttons */}
      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4, left: 10}} ><SaveFileIcon fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Save</Typography>
      </StyledButton>

  
      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><CloudComputingLogo fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Load</Typography>
      </StyledButton>

      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><CalculateIcon fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Calculate Risk</Typography>
      </StyledButton>

      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        <div style={{paddingRight: 25, marginTop: 4}} ><ContractIcon fill={white} /></div>
        <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Generate Report</Typography>
      </StyledButton>

      {/* Next */}
      { props.currentPage === "inherent-risk" ? 
        <Link to="/editor">
          <StyledButton >
          {/* onClick={() => nextPaneFunc()} */}
            <div style={{paddingRight: 25, marginTop: 4,}} ><ArrowForwardIosIcon fill={white}/></div>
            <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Next</Typography>
          </StyledButton>
        </Link> : 
        <Link to="/">
          <StyledButton >
          {/* onClick={() => nextPaneFunc()} */}
            <div style={{paddingRight: 25, marginTop: 4,}} ><ArrowForwardIosIcon fill={white}/></div>
            <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Next</Typography>
          </StyledButton>
        </Link>
      }
      

      {/* Move pane button */}
      <StyledButton onClick={() => movePane()} style={{position: "absolute", bottom: 0, left: 0}}>
        <div style={{paddingRight: 25, marginTop: 4,}} ><MoveWindowIcon fill={white} className={classes.icon}/></div>
        <Typography style={{textTransform: "none", fontSize: 15, fontFamily: 'Open Sans',}}>Move Pane</Typography>
      </StyledButton>
      
    </div>
  );
}

export default withStyles(styles)(CustomizedExpansionPanel);