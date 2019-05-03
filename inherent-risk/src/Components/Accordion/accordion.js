import React from 'react';

import TextButtons from './button';


function CustomizedExpansionPanel() {

   

    return (
      <div style={{width: '90%'}}>
        <TextButtons name="Save"/>
        <TextButtons name="Load" />
        <TextButtons name="Calculate Risk" />
        <TextButtons name="Generate Report" />
      </div>
    );
  // }
}

export default CustomizedExpansionPanel;