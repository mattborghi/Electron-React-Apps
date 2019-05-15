import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function MoveWindowIcon({ className, fill}) {
  return (
    <SvgIcon  viewBox="0 0 459 459" className={className}>
     <g>
	<g id="launch">
		<path d="M408,408H51V51h178.5V0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V229.5h-51V408z
			 M280.5,0v51h91.8L122.4,300.9l35.7,35.699L408,86.7v91.8h51V0H280.5z"/>
	</g>
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
    </SvgIcon>  
  );
}

MoveWindowIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

MoveWindowIcon.defaultProps = {
  className: undefined,
  fill: '#000',
};

export default MoveWindowIcon;