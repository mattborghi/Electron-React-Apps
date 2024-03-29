import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function InfoLogo({ className, fill }) {
  return (
    <SvgIcon viewBox="0 0 100 100" className={className}>
      <path fill={fill} d="M62.162,0c6.696,0,10.043,4.567,10.043,9.789c0,6.522-5.814,12.555-13.391,12.555
			c-6.344,0-10.045-3.752-9.869-9.947C48.945,7.176,53.35,0,62.162,0z M41.543,100c-5.287,0-9.164-3.262-5.463-17.615l6.07-25.457
			c1.057-4.077,1.23-5.707,0-5.707c-1.588,0-8.451,2.816-12.51,5.59L27,52.406C39.863,41.48,54.662,35.072,61.004,35.072
			c5.285,0,6.168,6.361,3.525,16.148L57.58,77.98c-1.234,4.729-0.703,6.359,0.527,6.359c1.586,0,6.787-1.963,11.896-6.041L73,82.377
			C60.488,95.1,46.83,100,41.543,100z"/>
    </SvgIcon>  
  );
}

InfoLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

InfoLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default InfoLogo;