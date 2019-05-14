import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ListSubheader from '@material-ui/core/ListSubheader'
import CustomizedSwitches from '../switch/on-off-button.jsx'
import SwitchButton from '../switch/switch-button.jsx'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FileLogo from '../icons/file.jsx'
import InformationLogo from '../icons/information.jsx'
import LoupeIcon from '../icons/loupe.jsx'
import FullScreenDialog from '../PopUp/pop-up.jsx'

function Settings(props){

    const styleBars = { width: '80%', color: 'white',}

    const white="#ffffff"
    const grey = "rgb(200,200,200)"
    // const green = "rgb(200,150,200)"
    // const { classes } = props
    const [toggleOn, setToggleOn] = useState(true)
    const [switchToggleOn, setSwitchToggleOn] = useState(true)

    function onChange() {
        let isToggled = toggleOn 
        if(isToggled){
        setToggleOn(false)
        }else {
        setToggleOn(true)
        }
        props.toggleFunc(toggleOn)
    }

    function onStatusChange() {
        let isToggled = !switchToggleOn 
        setSwitchToggleOn(isToggled)
        props.toggleSwitch(isToggled)
    }


    return(
        <Grid 
            container 
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            {/* Settings Title */}
            <Grid item xs={12}>
                <ListSubheader 
                    component="div" 
                    style={{color: grey}}
                >
                    SETTINGS
                </ListSubheader>
            </Grid>
            {/* Theme */}
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>Theme</Typography>
                </Grid>
                <Grid item onChange={() => onChange()} >
                    <CustomizedSwitches />
                </Grid>                
            </Grid>
            <hr style={styleBars}/>
            {/* Hide/Show Status Bar */}
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans', textAlign: 'center'}}>
                        { switchToggleOn ? 'Hide Status Bar' : 'Show Status Bar'}
                    </Typography>
                </Grid>
                <Grid item onChange={() => onStatusChange()}>
                    <div style={{paddingRight: 25, marginTop: 4}} ><SwitchButton color="green"/></div>
                </Grid>                
            </Grid>
            {/* View Status */}
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>View Status</Typography>
                </Grid>
                <Grid item >
                    <div style={{ marginTop: 4}} ><FullScreenDialog fill={white}/></div>
                </Grid>                
            </Grid>
            <hr style={styleBars}/>
            {/* Docs */}
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>Docs</Typography>
                </Grid>
                <Grid item>
                    <div style={{paddingRight: 25, marginTop: 4}} ><Button><FileLogo fill={white} /></Button></div>
                </Grid>                
            </Grid>
            {/* Help */}
            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>Help</Typography>
                </Grid>
                <Grid item >
                    <div style={{paddingRight: 25, marginTop: 4}} ><Button><InformationLogo fill={white} /></Button></div>
                </Grid>                
            </Grid>
        
                
        {/* End of settings */}
        </Grid>
    )
}

export default Settings