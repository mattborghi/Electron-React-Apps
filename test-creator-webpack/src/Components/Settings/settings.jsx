import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ListSubheader from '@material-ui/core/ListSubheader'
import CustomizedSwitches from '../switch/on-off-button.jsx'
import SwitchButton from '../switch/switch-button.jsx'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Icon from '@mdi/react'
// Icons
import { mdiLightbulb, 
         mdiLightbulbOn, 
         mdiFile, 
         mdiHelpBox, 
         mdiFormatListBulletedSquare, 
         mdiAlertCircle
        } from '@mdi/js'
import FileLogo from '../icons/file.jsx'
import InformationLogo from '../icons/information.jsx'
// import LoupeIcon from '../icons/loupe.jsx'
import FullScreenDialog from '../PopUp/pop-up.jsx'
import ListIcon from '../icons/list-icon.jsx'
import ErrorIcon from '../icons/error-icon.jsx'
import HighlightIcon from '@material-ui/icons/Highlight'
import Off from '../switch/img/off.png'
import LoupeIcon from '@material-ui/icons/Loupe'
// List
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

function Settings(props){

    const white="#ffffff"
    const grey = "rgb(200,200,200)"
    const green = "rgb(200,150,200)"
    // const { classes } = props
    const [toggleOn, setToggleOn] = useState(true)
    const [switchToggleOn, setSwitchToggleOn] = useState(true)

    const style = {
        styleBars: { width: '80%', backgroundColor: green},
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
        <div>
        {/* Title */}
        <ListSubheader 
            component="div" 
            style={{color: grey}}
        >
            SETTINGS
        </ListSubheader>

        {/* Buttons */}
        <List >

        {/* Theme */}
        <ListItem alignItems="flex-start" button={true} onClick={() => onChange()} divider>
            <Icon 
                path={toggleOn ? mdiLightbulb : mdiLightbulbOn}
                size={1}
                color={toggleOn ? 'white' : 'black'}
            />
            <ListItemText primary="Theme" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}} />
        </ListItem>
        {/* View Status */}
        <ListItem alignItems="flex-start" button={true} divider>
            <LoupeIcon color={toggleOn ? "primary" : "secondary"} />
            <ListItemText primary="View Status" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}}/>
        </ListItem>
        {/* Docs */}
        <ListItem alignItems="flex-start" button={true} >
            <Icon 
                path={mdiFile}
                size={1}
                color={toggleOn ? 'white' : 'black'}
            />
            <ListItemText primary="Documentation" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}} />
        </ListItem>
        {/* Help */}
        <ListItem alignItems="flex-start" button={true} divider>
            <Icon 
                path={mdiHelpBox}
                size={1}
                color={toggleOn ? 'white' : 'black'}
            />
            <ListItemText primary="Help" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}} />
        </ListItem>
        {/* ToDo */}
        <ListItem alignItems="flex-start" button onClick={() => nextPaneFunc()} >
            <Icon 
                path={mdiFormatListBulletedSquare}
                size={1}
                color={toggleOn ? 'white' : 'black'}
            />
            <ListItemText primary="ToDo" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}} />
        </ListItem>
        {/* Error Logs */}
        <ListItem alignItems="flex-start" button onClick={() => nextPaneFunc()} >
            <Icon 
                path={mdiAlertCircle}
                size={1}
                color={toggleOn ? 'white' : 'black'}
            />
            <ListItemText primary="Error Logs" primaryTypographyProps={{color: toggleOn ? 'primary' : 'secondary'}} />
        </ListItem>
        {/* <Grid 
            container 
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        > */}
            {/* Settings Title */}
            {/* <Grid item xs={12}>
                <ListSubheader 
                    component="div" 
                    style={{color: grey}}
                >
                    SETTINGS
                </ListSubheader>
            </Grid> */}
            {/* Theme */}
            {/* <Grid 
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
            <hr style={style.styleBars}/> */}
            {/* Hide/Show Status Bar */}
            {/* <Grid 
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
            </Grid> */}
            {/* View Status */}
            {/* <Grid 
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
            <hr style={style.styleBars}/> */}
            {/* Docs */}
            {/* <Grid 
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
            </Grid> */}
            {/* Help */}
            {/* <Grid 
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

            <hr style={style.styleBars}/> */}
            {/* ToDo */}
            {/* <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>ToDo</Typography>
                </Grid>
                <Grid item>
                    <div style={{paddingRight: 25, marginTop: 4}} ><Button><ListIcon fill={white} /></Button></div>
                </Grid>                
            </Grid> */}
            {/* Error Console */}
            {/* <Grid 
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item >
                    <Typography style={{textTransform: "none", fontSize: 18, fontFamily: 'Open Sans',}}>Error Logs</Typography>
                </Grid>
                <Grid item >
                    <div style={{paddingRight: 25, marginTop: 4}} ><Button><ErrorIcon fill={white} /></Button></div>
                </Grid>                
            </Grid> */}
        
                
        {/* End of settings */}
        {/* </Grid> */}
        </List>
        </div>
    )
}

export default Settings