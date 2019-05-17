import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = theme => ({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
//   styleRight: {
//     position: "absolute",
//     right: 0,
//     bottom: 0,
// },
// styleLeft: {
//     position: "absolute",
//     left: 0,
//     bottom: 0,
// },
});

class LogUser extends React.Component {
    render (){
        const { classes } = this.props;
        return(
            <Grid container justify="center" alignItems="center">
                <Avatar className={classes.avatar}>ES</Avatar>
                {/* <Avatar className={classes.orangeAvatar}>N</Avatar>
                <Avatar className={classes.purpleAvatar}>OP</Avatar> */}
            </Grid>
        )
    }
}

export default withStyles(styles)(LogUser)