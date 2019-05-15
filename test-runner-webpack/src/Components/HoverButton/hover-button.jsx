import React, { Component } from 'react';
import ArrowBackwardIosIcon from '@material-ui/icons/ArrowBackIos';
import Fab from '@material-ui/core/Fab';

const styles = {
  buttonLeft: {
      position: "absolute",
      left: -30,
      top: "50%",
  }
}

class HoverButton extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      isHovering: false,
      sidebarVisible: true
    };
  }      
 
  toggleSidebar() {
      this.setState(state => ({ sidebarVisible: !state.sidebarVisible }));
  }
  handleMouseHover() {
    // this.setState(this.toggleHoverState);
    this.setState(this.toggleSidebar);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      
      <Fab 
      color="primary" 
      aria-label="Add" 
      style={styles.buttonLeft} 
      onClick={this.toggleSidebar} 
      // onMouseEnter={this.handleMouseHover}
      // onMouseLeave={this.handleMouseHover}>
      onMouseEnter={this.toggleSidebar}
      onMouseLeave={this.toggleSidebar}>
        {/* {this.state.sidebarVisible && 'Hide Sidebar'}
        {!this.state.sidebarVisible && 'Show Sidebar'} */}
        <ArrowBackwardIosIcon style={{left: 20, position: "relative"}}/>
      </Fab>
    );
  }
}

export default HoverButton;