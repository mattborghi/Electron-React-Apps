import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import Switch from '@material-ui/core/Switch'

const styles = theme => ({
  colorSwitchBase: {
    color: purple[300],
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: 'rgb(150,200,150)'
        // yellow -> 'rgb(243, 239, 163)',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

class SwitchButton extends React.Component {
  state = {
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    // console.log(this.state.checkedB)
  };

  render() {
    const { classes } = this.props;

    return (
            <Switch
            classes={{
                switchBase: classes.iOSSwitchBase,
                bar: classes.iOSBar,
                icon: classes.iOSIcon,
                iconChecked: classes.iOSIconChecked,
                checked: classes.iOSChecked,
            }}
            disableRipple
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            />
    );
  }
}

SwitchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchButton);
