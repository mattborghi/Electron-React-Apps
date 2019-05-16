import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class LinearDeterminate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completed: 0,
      overBar: false,
      heightSize: 10,
      opacity: 1,
    };
  }
  

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  toggleAlpha = () => {
    let status = this.state.overBar;
    // var newHeight;
    // var newOpacity;
    // if (status === 'false')
    // {
      this.setState({
        overBar: !status,
        heightSize: status ? 10 : 20,
        opacity: status ? 1 : 0.7,
      });
    // } else {
    //   newHeight = 50;
    //   newOpacity = 1;
    // }

    // this.setState({
    //   overBar: !status,
    //   heightSize: newHeight,
    //   opacity: newOpacity,
    // });
    // console.log(this.state.heightSize, this.state.overBar, this.state.opacity)
  };

  render() {
    const { classes } = this.props;

    const style = {
      position: "absolute",
      left: 0, 
      bottom: 0,
      width: "100%",
      height: this.state.heightSize,
      opacity: this.state.opacity,
    }
    return (
      <div className={classes.root} onMouseEnter={this.toggleAlpha} onMouseLeave={this.toggleAlpha}>
        <LinearProgress color="primary" variant="determinate" value={70} style={style}/>
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);