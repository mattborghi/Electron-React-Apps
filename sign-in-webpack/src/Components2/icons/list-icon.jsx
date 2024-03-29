import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function ListIcon({ className, }) {
  // fill
  return (
    <SvgIcon viewBox="0 0 60.123 60.123" className={className}>
   <g>
	<path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
	<path d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
		C60.124,31.719,58.781,33.062,57.124,33.062z"/>
	<path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
	<circle cx="4.029" cy="11.463" r="4.029"/>
	<circle cx="4.029" cy="30.062" r="4.029"/>
	<circle cx="4.029" cy="48.661" r="4.029"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
      {/* fill={fill}  */}
    </SvgIcon>  
  );
}

ListIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

ListIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default ListIcon;