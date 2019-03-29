import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import TextButtons from './button';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,255,0.1)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        {/* Product Design */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography>Product Design</Typography>  
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Feeder
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
              Load Feeder
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
              Save Feeder
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Risk Identification */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary>
            <Typography>Risk Identification</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Test Plan Design */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary>
            <Typography>Test Plan Design</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Performance Testing */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary>
            <Typography>Performance Testing</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Model Report */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel5'}
          onChange={this.handleChange('panel5')}
        >
          <ExpansionPanelSummary>
            <Typography>Model Report</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Issues and Limitations */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel6'}
          onChange={this.handleChange('panel6')}
        >
          <ExpansionPanelSummary>
            <Typography>Issues and Limitations</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Risk Score Assessment */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel7'}
          onChange={this.handleChange('panel7')}
        >
          <ExpansionPanelSummary>
            <Typography>Risk Score Assessment </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Monitoring */}
        <ExpansionPanel
          square
          expanded={expanded === 'panel8'}
          onChange={this.handleChange('panel8')}
        >
          <ExpansionPanelSummary>
            <Typography>Monitoring </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Generate Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Load Test
            </Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Typography>
                Save Test
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    );
  }
}

export default CustomizedExpansionPanel;