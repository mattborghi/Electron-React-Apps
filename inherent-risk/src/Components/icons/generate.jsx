import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function GenerateIcon({ className, fill}) {
  return (
    <SvgIcon viewBox="0 0 48 48" className={className}>
  <g id="Icons"><g>
  <path d="M36.51251,13.87004l-1.56,1.56l-0.10004,0.09998c0,0.01001-0.00995,0.02002-0.01996,0.03003    
  l-1.21002,1.19995L21.41247,28.97001L19.33252,29.58l0.69-2l12.20996-12.20001l1.21002-1.20996v-0.01001l1.67999-1.67999    
  c0.19-0.19,0.44-0.28003,0.69-0.28003c0.26001,0,0.51001,0.09003,0.70001,0.28003    
  C36.89252,12.86003,36.89252,13.49003,36.51251,13.87004z" fill={fill}/>
  {/* fill="#F4F4F4" */}
  <path d="M36.51251,13.87004L21.41247,28.97001L19.33252,29.58l0.69-2L35.1225,12.48002    
  c0.19-0.19,0.44-0.28003,0.69-0.28003c0.26001,0,0.51001,0.09003,0.70001,0.28003    C36.89252,12.86003,36.89252,13.49003,36.51251,13.87004z" 
  fill={fill}/>
  {/* fill="#F4F4F4" */}
  <path d="M33.4425,14.17002c0,0,0.97863,0.30712,1.41687,1.1874l-1.09719,1.26404    
  c0,0-0.6711-1.2655-1.52929-1.24554L33.4425,14.17002z" fill={fill} />
  {/* fill="#5F83CF" */}
  <path d="M34.39249,18.82001l0.64-0.64l0.86-0.85v15.46c0,1.66-1.26,3.01-2.8,3.01h-19.08    
  c-1.55,0-2.81-1.35-2.81-3.01v-16.41c0-1.66,1.26-3.01,2.81-3.01h17.4l-1.5,1.5h-15.9c-0.72,0-1.31,0.68-1.31,1.51v16.41    
  c0,0.83,0.59,1.51,1.31,1.51h19.08c0.72,0,1.3-0.68,1.3-1.51V18.82001z" fill={fill} />
  {/* fill="#5F83CF" */}
  <path d="    M34.39249,18.82001l0.64-0.64l0.86-0.85v15.46c0,1.66-1.26,3.01-2.8,3.01h-19.08c-1.55,0-2.81-1.35-2.81-3.01v-16.41    
  c0-1.66,1.26-3.01,2.81-3.01h17.4l-1.5,1.5h-15.9c-0.72,0-1.31,0.68-1.31,1.51v16.41c0,0.83,0.59,1.51,1.31,1.51h19.08    
  c0.72,0,1.3-0.68,1.3-1.51V18.82001z" 
  fill={fill} stroke="#303030" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
  <path d="    M36.51251,13.87004l-2.89001,2.88995L21.41247,28.97001L19.33252,29.58l0.69-2l12.20996-12.20001l2.89001-2.89996    
  c0.19-0.19,0.44-0.28003,0.69-0.28003c0.26001,0,0.51001,0.09003,0.70001,0.28003    C36.89252,12.86003,36.89252,13.49003,36.51251,13.87004z" 
  fill={fill} stroke="#303030" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
  <path d="    M34.85823,15.50513c0.04126-0.33175-1.04965-1.41855-1.37866-1.3499" 
  fill={fill} stroke="#303030" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
  <path d="    M32.25299,15.36565c0.31206-0.11843,1.49841,1.07541,1.38655,1.36732" 
  fill={fill} stroke="#303030" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
  </g></g>
    </SvgIcon>  
  );
}

GenerateIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

GenerateIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default GenerateIcon;