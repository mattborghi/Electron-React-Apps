import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function FileLogo({ className, fill}) {
  return (
    <SvgIcon viewBox="0 0 60 60" className={className}>
   <g>
	<path d="M45,25H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,25,45,25z"/>
	<path d="M20,19h10c0.552,0,1-0.447,1-1s-0.448-1-1-1H20c-0.552,0-1,0.447-1,1S19.448,19,20,19z"/>
	<path d="M45,33H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,33,45,33z"/>
	<path d="M45,41H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,41,45,41z"/>
	<path d="M45,49H20c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S45.552,49,45,49z"/>
	<path d="M49,14.586V0H6v55h5v5h43V19.586L49,14.586z M40,8.414l9,9L50.586,19H40V8.414z M8,53V2h39v10.586L39.414,5H11v48H8z
		 M13,58v-3V7h25v14h14v37H13z"/>
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

FileLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

FileLogo.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default FileLogo;