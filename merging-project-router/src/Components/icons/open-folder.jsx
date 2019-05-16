import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function FolderLogo({ className, }) {
  // fill
  return (
    <SvgIcon viewBox="0 0 100 100" className={className}>
    {/* 24 24 */}
      <path d="M95.351,35h-90.7c-4.604,0-4.834,2.241-4.584,4.979L4.194,85.02C4.444,87.759,5.093,90,9.69,90
			h80.621c4.688,0,5.244-2.241,5.494-4.979l4.127-45.041C100.183,37.241,99.954,35,95.351,35z M92.022,24
			c-0.555-2.2-3.275-4-6.047-4H51.903c-2.771,0-6.645-1.588-8.607-3.528l-2.979-2.943C38.354,11.588,34.481,10,31.71,10H15.431
			c-2.771,0-5.289,2.236-5.594,4.97L8.376,28H93.03L92.022,24z"/>
      {/* d="M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z" */}
      {/* fill={fill}  */}
    </SvgIcon>  
  );
}

FolderLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

FolderLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default FolderLogo;