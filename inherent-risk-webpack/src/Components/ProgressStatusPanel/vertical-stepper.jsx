import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  // stepIcon: {
  //   color: "grey",
  // },
  whole: {
    width: '130%',
    marginLeft: 0,
    paddingLeft: 10,
  }
});

const green = 'rgb(150,200,150)'
const black2 = 'rgb(66,66,66)'
const white = 'rgb(255,255,255)'
const dark_grey = 'rgb(119,136,153)'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: green,
      main: green,
      // dark: black2,
      // contrastText: white,
    },
  },
  typography: { 
      useNextVariants: true
  },
});


function getSteps() {
  return [
      'Product Creator', 
      'Inherent Risk', 
      'Contract Creator', 
      'Test Creator',
      'Test Runner',
      'Document Generator',
      'Model Risk',
      'Model Monitoring',
      ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
        // Product Creator
      return `Create Product by clicking on pattern figures and complete the generated YAML file.`;
    case 1:
        // Inherent Risk
      return 'Inherent Risk of the model.';
    case 2:
        // Contract Creator
      return `Contracts creation process.`;
    case 3:
        // Test Creator
      return `Tests creation process.`;
    case 4:
        // Test Runner
      return `Running generated tests.`;
    case 5:
        // Document Generator
      return `Generate project documentation.`;
    case 6:
        // Model Risk
      return `Generate model risk.`;
    case 7:
        // Model Monitoring
      return `Monitor model.`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root} id="stepper-div">
        <Stepper activeStep={activeStep} orientation="vertical"
          classes={{
            root: classes.whole
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              {/* StepIconProps={{
                    classes: { root: classes.stepIcon }
                  }} */}
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="default"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
      </MuiThemeProvider>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);