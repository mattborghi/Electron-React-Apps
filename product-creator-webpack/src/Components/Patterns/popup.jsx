import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormLabel from '@material-ui/core/FormLabel';
import Gooey from './Gooey/gooey.jsx';
import LoupeIcon from '../icons/loupe.jsx'
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { vs2015 } from "react-syntax-highlighter/styles/hljs";
import { vs2015, tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import Prism from "prismjs"
// require('prismjs/components/prism-yaml')
// var loadLanguages = require('prismjs/components/index')
// loadLanguages(['yaml'])
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/oceanicNext'
// import Prism from 'prismjs/components/prism-yaml.js';
import { Wrapper, Pre, LineNo } from './styles.jsx'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  content: {
      pading: 20,
      align: 'center',
      margin: 10,
    //   background: 'rgb(45,45,45)',
  },
//   syntax: {
//       background: 'rgb(66,66,66)',
//   }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

//   componentDidMount() {
//     Prism.highlightAll();
//   }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div >
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          View Project Status
        </Button> */}
        <a href="#" onClick={this.handleClickOpen} className={classes.link}>
            Learn more
        </a>
        <Dialog
        //   fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          maxWidth="xs"
          fullWidth
        //   PaperProps={{background: 'rgb(45,45,45)',}}
        >
          <AppBar className={classes.appBar} color="secondary">
            <Toolbar>
              <IconButton color="primary" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="primary" className={classes.flex}>
                Pattern view
              </Typography>
              <Button color="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          
        <div id="content-div" className={classes.content}>
        {/* <Highlight {...defaultProps} code={this.props.code} language="yaml" >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                    </div>
                ))}
                </Pre>
            )}
            </Highlight> */}

            {/* <pre>
            <code className='language-yaml'>
                {this.props.code}
            </code>
            </pre> */}

            <Typography variant="subtitle1" color="primary"> {this.props.title} </Typography>

            <SyntaxHighlighter 
                language='yaml' 
                style={tomorrowNightEighties}
                showLineNumbers
                // customStyle={classes.syntax}
                // useInlineStyles={false}
            >   
                {this.props.code}
            </SyntaxHighlighter>
        </div>

                {/* <div class="row"> */}
                  {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh",flexDirection: 'column',}}>
                    <div>
                      <Gooey color={this.props.color}/>
                    </div>

                    <div style={{marginTop: 100,}}>
                      <FormLabel>
                        <h3><strong>You have completed 70% of the project!.</strong></h3>  
                      </FormLabel>
                    </div>
                    
                  </div> */}
                {/* </div> */}
                
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);