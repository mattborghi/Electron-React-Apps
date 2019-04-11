import React from 'react';

import TextButtons from './button';


class CustomizedExpansionPanel extends React.Component {
  render() {
    return (
      <div>
        <TextButtons name="Save" color="primary"/>
        <TextButtons name="Load" color="primary"/>
        <TextButtons name="Calculate Risk" color="primary"/>
        <TextButtons name="Generate Report" color="primary" />
      </div>
    );
  }
}

export default CustomizedExpansionPanel;