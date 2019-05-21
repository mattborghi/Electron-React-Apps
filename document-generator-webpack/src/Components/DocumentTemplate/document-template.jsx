import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import FullScreenDialog from '../PopUp/pop-up.jsx'
import NewTable from '../Table/material-table.jsx'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
//   dense: {
//     marginTop: 19,
//   },
  menu: {
    width: 200,
  },
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
});

const templates = [
    {
        value: 'article template',
        label: 'article',
    },
    {
        value: 'blank template',
        label: 'blank',
    },
    {
        value: 'bank X template',
        label: 'bank X',
    },
]

function handleChange (event) {
    setTemplate(event.target.value)
}

function DocumentTemplate(props){ 
    
    const [template, setTemplate] = useState('blank template')    

    const { classes } = props

    return(
        <div>

        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            {/* <form className={classes.form}>
            <FormControl margin="normal" required >
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            </form> */}

            <Grid item xs={1}>
                <Typography style={{fontSize: 25}}>
                    Template:
                </Typography>
            </Grid>

            <Grid item xs={3}>
                <TextField
                    id="select-template"
                    // label="Templates"
                    className={classes.textField}
                    value={template}
                    onChange={() => handleChange('template')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    // helperText="Please select your template"
                    margin="normal"
                    >
                    {templates.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={3}>
                {/* <Button>
                    Select Template
                </Button> */}
                <FullScreenDialog />
            </Grid>

        </Grid>

        <NewTable />

        </div>
    )
}

DocumentTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DocumentTemplate);

