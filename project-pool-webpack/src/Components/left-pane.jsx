import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button'
import FolderIcon from '@material-ui/icons/Folder';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  subheader: {
    fontSize: 20,
  },
});

const blue = '#4b6eaf'

class FolderList extends React.Component {
    constructor(props){
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            backButtonColor_one: styles.backgroundColor,
            backButtonColor_two: styles.backgroundColor,
            backButtonColor_three: styles.backgroundColor,
        }
    }
  

    handleChange = (word, number) => {
        // console.log(word, number)
        if (word === 'enter'){
            switch(number){
                case 'one':
                    this.setState ({
                        backButtonColor_one: blue
                    });
                    break;
                case 'two':
                    this.setState ({
                        backButtonColor_two: blue
                    });
                    break;
                case 'three':
                    this.setState ({
                        backButtonColor_three: blue
                    });
                    break;
                default: console.log('there was an error with project button value')
            }
            
        }
        if (word === 'exit'){
            switch(number){
                case 'one':
                    this.setState ({
                        backButtonColor_one: styles.backgroundColor
                    });
                    break;
                case 'two':
                    this.setState ({
                        backButtonColor_two: styles.backgroundColor
                    });
                    break;
                case 'three':
                    this.setState ({
                        backButtonColor_three: styles.backgroundColor
                    });
                    break;
                default: console.log('there was an error with project button value')
            }
        }
        // console.log(this.state.backButtonColor_one)
    }

    render(){

    const { classes } = this.props;


    return (
    <List 
      subheader={<ListSubheader component="div" className={classes.subheader}>Recent Projects</ListSubheader>}
    > 
        {/* className={classes.root} */}
      <Button style={{width: '100%', textTransform: "none", backgroundColor: this.state.backButtonColor_one}} onMouseEnter={() => this.handleChange('enter', 'one')} onMouseLeave={() => this.handleChange('exit', 'one')}>
      <ListItem>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary="CallableNote" secondary="~/Models/CallableNote/"/>
      </ListItem>
      </Button>
      <Button style={{width: '100%', textTransform: "none", backgroundColor: this.state.backButtonColor_two}} onMouseEnter={() => this.handleChange('enter','two')} onMouseLeave={() => this.handleChange('exit', 'two')}>
      <ListItem>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary="VolatilityTargetEuropeanOption" secondary="~/Models/VolatilityTargetEuropeanOption/" />
      </ListItem>
      </Button>
      <Button style={{width: '100%', textTransform: "none", backgroundColor: this.state.backButtonColor_three}} onMouseEnter={() => this.handleChange('enter','three')} onMouseLeave={() => this.handleChange('exit', 'three')}>
      <ListItem>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary="BermudanSwaption" secondary="~/Models/BermudanSwaption/" />
      </ListItem>
      </Button>
    </List>
  );
}
}

// FolderList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(FolderList);