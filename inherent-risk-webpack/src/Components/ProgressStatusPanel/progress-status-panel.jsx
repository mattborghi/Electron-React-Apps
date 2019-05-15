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
import ListIcon from '../icons/list-icon.jsx'
import ErrorIcon from '../icons/error-icon.jsx'
import VerticalLinearStepper from './vertical-stepper.jsx'

function ProgressBarPanel(props){

    const white="#ffffff"
    const grey = "rgb(200,200,200)"
    const green = "rgb(200,150,200)"
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
                    PROGRESS STATUS
                </ListSubheader>
            </Grid>
            
            
            <Grid item>
                <VerticalLinearStepper />
            </Grid>
            
        {/* End of settings */}
        </Grid>
    )
}

export default ProgressBarPanel