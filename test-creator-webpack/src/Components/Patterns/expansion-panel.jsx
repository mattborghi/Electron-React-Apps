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
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015, tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import OneDimension from '../Plots/OneDimension.jsx'
import DiffPlot from '../Plots/diffPlot.jsx'
import ComparisonPlot from '../Plots/comparisonPlot.jsx'
import ContourPlot from '../Plots/contourPlot.jsx'

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

  const patternsPlot = {
    featuresPlot: {
      title: 'Features Plot',
      plot: <OneDimension />,
      code: dedent`OneDimension:
        name: OneDimension
        type: Limiting case
        contracts: [ContractA, ContractB]

        variations:
          x_variable:
            name: Product/Exp/contract_data/k
            minimum: 0.2
            maximum: 1.2
            num_points: 10

          y_variable:
            name: fair_value
            minimum:
            maximum:
            num_points:

          z_variable:
            name: Process/s1/market_data/initial
            minimum: 50
            maximum: 100
            num_points: 2

        plot_attributes:
          xlabel: Strike (k)
          ylabel: Fair value

        report_attributes:
          output_reports_path: C:\cygwin\home\martink\UniversalMC\Data\reports\European\OneDimensionTest
          template_name: one_dimension_template.tex

          text: We run the One dimension test for the European product with 2 monte carlo paths for different initial configurations of $S_{0}$, the initial value of the underlier and $k$, the strike value. $S_{0}$ lied between 50 and 250, meanwhile $k$ was determined to be between 100 and 120
          fig_caption: One dimensional plot.
          table_caption:  One dimensional test table.
          conclusion: The test shows how the fair value of European behaves as $k$ and $S_{0}$ are varied.

        outputs_requests:
          save_outputs: True
          plot: True
          tex_file: True
          pdf_file: False`,
      
    },
    surfacePlot: {
      title: 'Surface Plot',
      plot: <ContourPlot />,
      code: dedent`
              Contour:
                name: Contour
                type: Computational performance
                contracts: [ContractC]

                variations:
                  x_variable:
                    name: Algorithmic data/Process parameters/steps_per_year
                    minimum:  252
                    maximum:  2520
                    num_points: 5

                  y_variable:
                    name: comp_time
                    minimum:
                    maximum:
                    num_points:

                  z_variable:
                    name: Algorithmic data/MC parameters/paths
                    minimum: 100
                    maximum: 500
                    num_points: 5

                plot_attributes:
                  xlabel: Number of steps
                  ylabel: [Number of paths, Computation time (s)]

                report_attributes:
                  output_reports_path: C:\cygwin\home\martink\UniversalMC\Data\reports\European\ContourTest
                  template_name: contour_template.tex

                  text: We run Contour test for the European product model with 2 monte carlo paths for different number of paths and Monte Carlo steps. They lied between 252 and 2500 and 100 and 500 respectively.
                  fig_caption: Contour plot.
                  table_caption:  Contour table.
                  conclusion: The test shows how the product model ...

                outputs_requests:
                  save_outputs: True
                  plot: True
                  tex_file: True
                  pdf_file: False

              Greeks:
                name: Greeks
                type: Sensitivities
                contracts: [ContractD]

                variations:
                  x_variable:
                    name: Process/s1/market_data/initial
                    minimum:  100
                    maximum:  110
                    num_points: 10

                  y_variable:
                    name: fair_value
                    minimum:
                    maximum:
                    num_points:

                  z_variable:
                    name: Process/s1/market_data/sigma
                    minimum: 0.1
                    maximum: 0.2
                    num_points: 10

                plot_attributes:
                  xlabel: ['$S_{0}$', '$\sigma$']
                  ylabel: [Fair value, '$\Delta$', '$\nu$']
                  legends: [Fair value $\Delta$, Fair value $\nu$]

                report_attributes:
                  output_reports_path: C:\cygwin\home\martink\UniversalMC\Data\reports\European\GreeksTest
                  template_name: monte_carlo_fv_greeks_template.tex

                  text: We run the Greeks test for the European product model with 2 monte carlo paths. Delta ($\Delta$) and Vega ($\nu$) were computed. To that end $S_{0}$ and $\sigma$ varied between 100 and 110 and between 0.1 and 0.2.
                  fig_caption: One dimensional plot
                  table_caption:  One dimensional test table
                  conclusion: The test shows how the product model ...

                outputs_requests:
                  save_outputs: True
                  plot: True
                  tex_file: True
                  pdf_file: False`
    },
    comparisonPlot: {
      title: 'Comparison Plot',
      plot: <DiffPlot />,
      code: dedent`
              Comparison:
            name: Comparison
            type: Benchmarking
            contracts: [ContractC]

            variations:
              x_variable:
                name: Process/s1/market_data/initial
                minimum:  50
                maximum:  250
                num_points: 20

              y_variable:
                name: fair_value
                minimum:
                maximum:
                num_points:

              z_variable:
                name: fv_fo
                minimum:  0
                maximum:  1
                num_points: 20

            plot_attributes:
              xlabel: '$S_{0}$'
              ylabel: [Fair value, Absolute difference]
              legends: [Monte Carlo, Front Office]

            report_attributes:
              output_reports_path: C:\cygwin\home\martink\UniversalMC\Data\reports\European\ComparisonTest
              template_name: comparison_template.tex

              text: We run the Comparison test for the European product model with 2 monte carlo paths for different initial configurations of $S_{0}$ which lied between 50 and 250.
              fig_caption: Comparison plot.
              table_caption: Comparison test table.
              conclusion: The test show how the European product ...

            outputs_requests:
              save_outputs: True
              plot: True
              tex_file: True
              pdf_file: False`
    },
  }

  return (
    <div className={classes.root}>
    {/* Patterns AppBar */}
    {/* <SimpleAppBar title={"Patterns"} /> */}

      {/* Features Plot */}
      <ExpansionPanel >
      {/* defaultExpanded */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Features Plot</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography className={classes.secondaryHeading}>One dimension plot that does something</Typography>
          </div>
        </ExpansionPanelSummary>
        {/* Content */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternsPlot.featuresPlot) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Other information related to the plot.
              <br />
              <FullScreenDialog data={patternsPlot.featuresPlot}/>
            </Typography>
          </div>

        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>

      {/* ************************************************************** */}


      {/* Surface Plot */}
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Surface Plot</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography className={classes.secondaryHeading}>Two dimension plot that does something</Typography>
          </div>
        </ExpansionPanelSummary>
        {/* Content */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternsPlot.surfacePlot) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Other information related to the plot.
              <br />
              <FullScreenDialog data={patternsPlot.surfacePlot}/>
            </Typography>
          </div>

        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>

      {/* ************************************************************** */}


      {/* Comparison Plot */}
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Comparison Plot</Typography>
          </div>
          <div className={classes.subtitle}>
            <Typography className={classes.secondaryHeading}>Two one dimension plot that does something</Typography>
          </div>
        </ExpansionPanelSummary>
        {/* Content */}
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Button size="small" onClick={() => onClick(patternsPlot.comparisonPlot) }>Add</Button> 
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Other information related to the plot.
              <br />
              <FullScreenDialog data={patternsPlot.comparisonPlot}/>
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