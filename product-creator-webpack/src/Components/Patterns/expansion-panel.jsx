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
    // flexBasis: '50.33%',
    paddingRight: 20,
  },
  title: {
    // flexBasis: '10%',
    width: '50%',
    // fontSize: theme.typography.pxToRem(15),
  },
  subtitle: {
    // flexBasis: '50%',
    paddingLeft: 30,
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
      euler: dedent`empty rng patter code`,
      milstein: dedent`another pattern`,
      gbm: dedent`gbm patter code`,
      custom: dedent`custom pattern code`
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

      {/* Product */}
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Product</Typography>
          </div>
          <div className={classes.subtitle}>
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
              <FullScreenDialog title={'Average'} code={patternCodes.product.average}/>
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
              <FullScreenDialog title={'Basket'} code={patternCodes.product.basket}/>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>

      {/* ************************************************************** */}

      {/* Process */}
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Process</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography className={classes.secondaryHeading}>Select process' patterns in order to assembly pattern structures</Typography>
          </div>
        </ExpansionPanelSummary>
        
        {/* RNG */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
            <Typography >
              Random Number Generator
            </Typography>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              This is a Random Number Generator.
              <br />
              <FullScreenDialog title={'RNG'} code={patternCodes.process.rng}/>
            </Typography>
          </div>
          <ExpansionPanelActions className={classes.actions}>
            <Button size="small">Remove</Button>
            <Button size="small" color="primary" onClick={() => onClick(patternCodes.process.rng)}>Add</Button>
          </ExpansionPanelActions>
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
              <FullScreenDialog title={'Another process pattern'} code={patternCodes.process.another}/>
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
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);