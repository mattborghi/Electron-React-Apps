import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SimpleAppBar from './appbar.jsx'
import dedent from 'dedent'
import SvgIcon from '@material-ui/core/SvgIcon'
import FullScreenDialog from './popup.jsx'

const grey = 'rgb(47,79,79)'
const grey2 = 'rgb(105,105,105)'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    backgroundColor: grey,
  },
  actions: {
    backgroundColor: grey,
  },
  column: {
    flexBasis: '50.33%',
  },
  title: {
    flexBasis: '10%',
    // fontSize: theme.typography.pxToRem(15),
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {
  const { classes } = props;

  const initialString = dedent`Product: `
  const [code, setCode] = useState(initialString)
  const [openPopUp, setOpenPopUp] = useState(false)

  function onClick(pieceCode) {
    let newCode = code + "\n\n" + pieceCode
    setCode(newCode)
    props.monacoCode(newCode)
  }

  function onMoreClick(name, code) {
    console.log('The link was clicked. For ' + name + ' var with code: ' + code)
    setOpenPopUp(true)
  }

  function onCloseDialog() {
    setOpenPopUp(false)
  }

  const patternCodes = {
    process: {
      rng: dedent`empty rng patter code`,
      another: dedent`another pattern`,
    },
    product: {
      expiryPayoff: dedent`BasketAsian:
                            type: expiry_payoff
                            input:
                              underlier:`,
      average: dedent`Asian:
                      type: average
                      input:
                        underlier:
                      output:
                        name:`,
      basket: dedent`Basket:
                      type: weighted_basket
                      input:
                        underlier1: 
                        underlier2: 

                      output:
                        name: `,
    }
  }
  return (
    <div className={classes.root}>
    {/* Patterns AppBar */}
    <SimpleAppBar title={"Patterns"} />
      {/* Process */}
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Process</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select process' patterns in order to assembly pattern structures</Typography>
          </div>
        </ExpansionPanelSummary>
        {/* RNG */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <SvgIcon color="primary" viewBox="0 0 512 512">
            <path d="M0.001,373.649l234.144,135.146V310.78L0.001,175.583V373.649z M438.154,108.645v20.806  c0,15.412-29.509,27.901-65.96,27.901c-36.408,0-65.936-12.489-65.936-27.901V95.027h0.209  c2.213,14.542,30.741,26.063,65.724,26.063c36.454,0,65.96-12.501,65.96-27.858c0-15.431-29.506-27.895-65.96-27.895  c-2.891,0-5.755,0.088-8.55,0.253l-42.446-24.496v26.174c0,15.412-29.483,27.9-65.909,27.9c-22.889,0-43.047-4.938-54.889-12.443  c-1.68-1.722-3.754-3.402-6.249-4.969c-3.099-3.234-4.821-6.761-4.821-10.488V41.94l-41.023,23.676  c-2.959-0.139-5.941-0.279-8.994-0.279c-36.407,0-65.936,12.464-65.936,27.895c0,15.357,29.529,27.858,65.936,27.858  c34.983,0,63.537-11.521,65.749-26.063h0.186v34.424c0,15.412-29.483,27.901-65.934,27.901c-36.407,0-65.936-12.489-65.936-27.901  v-20.528l-50.789,29.276L257.52,273.794L490.917,139.08L438.154,108.645z M321.732,194.875c0,15.412-29.53,27.878-65.936,27.878  c-36.429,0-65.958-12.467-65.958-27.878v-34.426h0.208c2.216,14.545,30.745,26.084,65.75,26.084  c34.985,0,63.511-11.539,65.749-26.084h0.187V194.875L321.732,194.875z M277.824,312.537v196.304L512,373.649V177.353  L277.824,312.537z M255.285,58.904c36.429,0,65.909-12.469,65.909-27.872c0-15.388-29.483-27.873-65.909-27.873  c-36.432,0-65.959,12.485-65.959,27.873C189.326,46.435,218.853,58.904,255.285,58.904"/>
          </SvgIcon>
          {/* <div className={classes.title}>
            <Typography >
              RNG
            </Typography>
          </div> */}
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternCodes.process.rng) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is a Random Number Generator.
              <br />
              <FullScreenDialog title={'RNG'} code={patternCodes.process.rng}/>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions className={classes.actions}>
          <Button size="small">Remove</Button>
          <Button size="small" color="primary">Add</Button>
        </ExpansionPanelActions>
        <Divider />
        {/* Another process pattern */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternCodes.process.another) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is another patthern.
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        {/* <ExpansionPanelActions className={classes.actions}>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions> */}
      </ExpansionPanel>

      {/* ************************************************************** */}

      {/* Product */}
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Product</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select product's patterns in order to assembly pattern structures</Typography>
          </div>
        </ExpansionPanelSummary>
        {/* Expiry Payoff */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternCodes.product.expiryPayoff) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is an Expiry Payoff pattern.
              <br />
              <FullScreenDialog title={'Expiry Payoff'} code={patternCodes.product.expiryPayoff}/>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        {/* Average */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternCodes.product.average) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is an Average pattern.
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        {/* Basket */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternCodes.product.basket) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is a Basket pattern.
              <br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);