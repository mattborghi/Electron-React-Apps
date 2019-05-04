import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import { styled  } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

// Like https://github.com/brunobertolini/styled-by
// const styledBy = (property, mapping) => props => mapping[props[property]];

// const useStyles = makeStyles (theme => ({
//   root: {
//     background: props => props.textColor,
//   },
//   button: {
//     margin: theme.spacing.unit,

//   },
//   input: {
//     display: 'none',
//   },
// }));

const MyButton = styled(Button)`
  color: ${props => props.text};
  display: block;
  width: 100%;
  border: none;
  background : ${props => props.color};
`;

function TextButtons(props) {

  return (
    
      <MyButton 
        color={props.bgColor}
        text={props.textColor}
      >
        {props.name}
      </MyButton>
    
  );
}

export default TextButtons;