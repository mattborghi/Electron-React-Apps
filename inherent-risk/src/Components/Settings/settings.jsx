import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography'
import ListSubheader from '@material-ui/core/ListSubheader'
import CustomizedSwitches from '../switch/on-off-button';
import Grid from '@material-ui/core/Grid'

function Settings(props){

    // const { classes } = props
    const [toggleOn, setToggleOn] = useState(true)

    function onChange() {
        let isToggled = toggleOn 
        if(isToggled){
        setToggleOn(false)
        }else {
        setToggleOn(true)
        }
        props.toggleFunc(toggleOn);
        console.log('changed')
  }


    const grey = "rgb(200,200,200)"

    return(
        <Grid 
            container 
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <Grid item xs={12}>
                <ListSubheader 
                    component="div" 
                    style={{color: grey}}
                >
                    SETTINGS
                </ListSubheader>
            </Grid>

            <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                // style={{marginLeft: 10}}
            >
                <Grid item >
                    Theme
                </Grid>
                <Grid item onChange={() => onChange()} >
                    <CustomizedSwitches />
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default Settings