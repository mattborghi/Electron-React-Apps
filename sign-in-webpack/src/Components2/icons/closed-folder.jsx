import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function ClosedFolderLogo({ className, }) {
  // fill
  return (
    <SvgIcon viewBox="0 0 841.5 841.5" className={className}>
      <path d="M460.8,143.4c-12.9-24.8-38.6-40.4-66.5-40.4H50c-27.6,0-50,22.4-50,50v26.8h479.7L460.8,143.4z"/>
	   <path d="M791.6,224.8H0v463.7c0,27.601,22.4,50,50,50h741.5c27.6,0,50-22.399,50-50V274.8C841.6,247.2,819.2,224.8,791.6,224.8z"/>
      {/* fill={fill}  */}
    </SvgIcon>  
  );
}

ClosedFolderLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

ClosedFolderLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default ClosedFolderLogo;