import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function UpArrowIcon({ className, fill}) {
  return (
    <SvgIcon viewBox="0 0 32 32" className={className}>
  <g id="Layer_1"/><g id="arrow_x5F_up_x5F_alt1">
  <path d="M0,16c0,8.836,7.164,16,16.004,16C24.836,32,32,24.836,32,16c0-8.838-7.164-16-15.996-16   
  C7.164,0,0,7.162,0,16z M24,15.969h-6V24h-4v-8.031H8.031l7.973-7.971L24,15.969z" fill={fill} /></g>
  {/* fill="#4E4E50" */}
    </SvgIcon>  
  );
}

UpArrowIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

UpArrowIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default UpArrowIcon;