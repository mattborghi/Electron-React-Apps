import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function TerminalNewIcon({ className, fill }) {
  return (
    <SvgIcon viewBox="0 0 10 10" className={className}>
    <g transform="translate(0 -1028.4)">
    <path d="m3 1030.4c-1.1046 0-2 0.9-2 2v7 2 7c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-7-2-7c0-1.1-0.895-2-2-2h-9-9z" fill={fill} />
    {/* fill="#2c3e50" */}
    <path d="m3 2c-1.1046 0-2 0.8954-2 2v3 3 1 1 1 3 3c0 1.105 0.8954 2 2 2h9 9c1.105 0 2-0.895 2-2v-3-4-2-3-3c0-1.1046-0.895-2-2-2h-9-9z" 
        fill="#424242" transform="translate(0 1028.4)"/>
        {/* fill="#34495e" */}
    <path d="m4 5.125v1.125l3 1.75-3 1.75v1.125l5-2.875-5-2.875zm5 4.875v1h5v-1h-5z" fill={fill} transform="translate(0 1028.4)"/>
    {/* fill="#ecf0f1" */}
    </g>
    </SvgIcon>  
  );
}

TerminalNewIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

TerminalNewIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default TerminalNewIcon;