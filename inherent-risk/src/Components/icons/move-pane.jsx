import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function MovePaneLogo({ className, }) {
  // fill
  const white = "#ffffff"
  return (
    <SvgIcon viewBox="0 0 520 520" className={className}>
    <g><path fill={white} d="M78.018,178.588h143.91l53.586,54.054h-102.96l97.345,97.812l-39.547,39.78l-98.514-97.578v103.662l-53.82-53.82V178.588z    
    M82.464,320.626l44.928,44.929V262.126l102.959,101.79l33.229-33.462L161.79,228.196h103.194l-44.929-45.162H82.464V320.626z"/></g>
    </SvgIcon>  
  );
}

MovePaneLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

MovePaneLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default MovePaneLogo;