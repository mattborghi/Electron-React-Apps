import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import TerminalShell from '../shell/Shell'
// import TerminalSh from '../shell/Terminal'
import XTerminal from '../shell/xterm-reactv2'
import ListIcon from '../icons/list-icon'
import ErrorIcon from '../icons/error-icon'
import TerminalIcon from '../icons/terminal-icon'
import PythonIcon from '../icons/python-icon'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} > 
    {/* style={{ padding: 8 * 3 }} */}
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  tab: {
    textTransform: "none",
    height: '10px',
  },
  icon: {
    height: '12px',
    width: '12px',
    marginRight: '4px',
  }
});

class FullWidthTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  getColor = (color)  => {
    console.log(color)
    if(color === 'black2'){
      return "secondary"
    }else{
      return "primary"
    }
  }

  render() {
    const { classes, theme } = this.props;
    const data = [
      { label: "Todo", logo: ListIcon},
      { label: "Terminal", logo: TerminalIcon},
      { label: "Python Shell", logo: PythonIcon},
      { label: "Error Console", logo: ErrorIcon},
    ]

    const tabItems = data.map( (Row, index) => {
      return <Tab label={<><Row.logo className={classes.icon}/> {Row.label} </>} key={Row.label} className={classes.tab} />
    })
    return (
      <div className={classes.root} style={{backgroundColor: this.props.bgColor,}}>
        <AppBar position="static" color={this.props.toggleValue ? 'primary' : 'secondary'}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            // centered
          >
            {tabItems}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}> 
            {/* ToDo */}
            Complete
          </TabContainer>
          <TabContainer dir={theme.direction}>
            {/* Terminal */}
            {/* <TerminalSh /> */}
            <XTerminal />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            Python Shell
            {/* <TerminalShell /> */}
          </TabContainer>
          <TabContainer dir={theme.direction}>
            {/* Error Console */}
            Complete
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);