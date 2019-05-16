import React from 'react';

import TextButtons from './button';
import Grid from '@material-ui/core/Grid';
  

class ToolBox extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="MF" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="&#931;" color="secondary"/>
        </Grid>
        <Grid item xs={6}>
            <TextButtons name="Increasers" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="+" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="-" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="*" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="/" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="0" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="1" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="2" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="3" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="4" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="5" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="6" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="7" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>


        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="8" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="9" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="&radic;" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="^" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="(" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name=")" color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="." color="secondary"/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="DEL" color="secondary"/>
        </Grid>
        {/* End container */}
        </Grid>
        
      </div>
    );
  }
}

export default ToolBox;