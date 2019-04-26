import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function PlusLogo({ className, fill }) {
  return (
    <SvgIcon viewBox="0 0 24 24" className={className}>
      {/* <path fill={fill} d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"/> */}
      <path fill={fill} d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
    </SvgIcon>  
  );
}

PlusLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

PlusLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default PlusLogo;