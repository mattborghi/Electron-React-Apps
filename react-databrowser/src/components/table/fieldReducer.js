import React from 'react';
import { Field } from 'react-powerplug';
import { ControlledInput } from '../formElements';

function fieldReducer(fieldValue = '🍔', fieldName) {
  switch (fieldName) {
    case 'username':
      return (
        <Field initial={fieldValue}>
          {({ bind }) => (
            <ControlledInput {...bind} onClick={evt => evt.stopPropagation()} />
          )}
        </Field>
      );
    case 'name':
      return `🌄 ${fieldValue}`;
    case 'email':
      return `📝 ${fieldValue}`;
    case 'album':
      return `${fieldValue.title}`;
    default:
      return fieldValue;
  }
}

export default fieldReducer;
