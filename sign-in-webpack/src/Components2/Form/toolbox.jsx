import React from 'react';

import TextButtons from './button.jsx';
import Grid from '@material-ui/core/Grid';
  

class ToolBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // empty
        };
    }

  render() {
    return (
      <div>
        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="MF" color="secondary" makeClick={this.props.clickButton} />
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="&#931;" color="secondary" makeClick={this.props.clickButton} />
        </Grid>
        <Grid item xs={6}>
            <TextButtons name="Increasers" color="secondary" makeClick={this.props.clickButton} />
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="+" color="secondary" makeClick={this.props.clickButton} />
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="-" color="secondary" makeClick={this.props.clickButton} />
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="*" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="/" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="0" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="1" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="2" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="3" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="4" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="5" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="6" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="7" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        {/* End container */}
        </Grid>


        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="8" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="9" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="&radic;" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="^" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        {/* End container */}
        </Grid>

        <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item xs={3}>  
            <TextButtons name="(" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name=")" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="." color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        <Grid item xs={3}>
            <TextButtons name="DEL" color="secondary" makeClick={this.props.clickButton}/>
        </Grid>
        {/* End container */}
        </Grid>
        
      </div>
    );
  }
}

export default ToolBox;