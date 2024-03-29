import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function CalculateIcon({ className, fill}) {
  return (
    <SvgIcon viewBox="0 0 24 24" className={className}>
  <g><path d="M22,1H1C0.4,1,0,1.4,0,2v21c0,0.6,0.4,1,1,1h21c0.6,0,1-0.4,1-1V2C23,1.4,22.6,1,22,1z M2,3h9v9H2V3z M2,22v-9h9v9H2z    M21,22h-9v-9h9V22z M21,12h-9V3h9V12z"/>
  <path d="M8.5,7H7V5.5C7,5.2,6.8,5,6.5,5S6,5.2,6,5.5V7H4.5C4.2,7,4,7.2,4,7.5S4.2,8,4.5,8H6v1.5C6,9.8,6.2,10,6.5,10S7,9.8,7,9.5V8   h1.5C8.8,8,9,7.8,9,7.5S8.8,7,8.5,7z"/>
  <path d="M8.3,15.7c-0.2-0.2-0.5-0.2-0.7,0l-1.1,1.1l-1.1-1.1c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l1.1,1.1l-1.1,1.1   
  c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l1.1-1.1l1.1,1.1c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-1.1-1.1l1.1-1.1   C8.5,16.2,8.5,15.9,8.3,15.7z"/>
  <path d="M14.5,8h4C18.8,8,19,7.8,19,7.5S18.8,7,18.5,7h-4C14.2,7,14,7.2,14,7.5S14.2,8,14.5,8z"/>
  <path d="M14.5,17h4c0.3,0,0.5-0.2,0.5-0.5S18.8,16,18.5,16h-4c-0.3,0-0.5,0.2-0.5,0.5S14.2,17,14.5,17z"/>
  <path d="M18.5,18h-4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h4c0.3,0,0.5-0.2,0.5-0.5S18.8,18,18.5,18z"/></g>
    </SvgIcon>  
  );
}

CalculateIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

CalculateIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default CalculateIcon;