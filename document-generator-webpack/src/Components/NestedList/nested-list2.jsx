import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import Checkbox from '@material-ui/core/Checkbox';

class NestedList2 extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          checkedItems: new Map(),
        }    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const item = e.target.name;     
        const isChecked = e.target.checked;
        const newState = this.state.checkedItems.set(item, isChecked)  
        this.setState(prevState => ({checkedItems:newState}));
        this.props.checked(newState)
    }

    render() {      
        const checkboxes = this.props.data                
        const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
            <input type={type} name={name} checked={checked} onChange={onChange} />
        );
  
        Checkbox.propTypes = {
            type: PropTypes.string,
            name: PropTypes.string.isRequired,
            checked: PropTypes.bool,
            onChange: PropTypes.func.isRequired,
        }
  
        return (
          <React.Fragment>
            {
              checkboxes.map(item => (
                <label feature={item.feature}>
                  <p><Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                  {item.name}</p>                            
                </label>
              ))
            }
          </React.Fragment>
        );
      }
}

export default NestedList2;