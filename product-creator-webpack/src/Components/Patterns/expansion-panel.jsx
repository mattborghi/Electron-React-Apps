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

const grey = 'rgb(47,79,79)'
const grey2 = 'rgb(105,105,105)'

const styles = theme => ({
  root: {
    width: '100%',
    // paddingTop: 49,
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
  // actions: {
  //   backgroundColor: grey,
  // },
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
  const [code, setCode] = useState(initialString);

  function onClick(pieceCode) {
    let currentCode = code 
    // console.log('current: ', currentCode)
    // console.log('new: ', pieceCode)
    setCode(currentCode + "\n\n" + pieceCode)
    // console.log(code)
    props.monacoCode(code)
  }

  const patternCodes = {
    process: {
      rng: dedent`empty rng`,
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
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
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
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
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