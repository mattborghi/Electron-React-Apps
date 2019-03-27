function fieldReducer(fieldValue = '🍔', fieldName) {
    switch (fieldName) {
      case 'album':
        return `${fieldValue.title}`;
      case 'name':
        return `🌄 ${fieldValue}`;
      case 'email':
        return `📝 ${fieldValue}`;
      default:
        return fieldValue;
    }
  }
  
  export default fieldReducer;
  