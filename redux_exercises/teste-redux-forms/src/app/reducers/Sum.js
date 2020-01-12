const INITIAL_STATE = {
  number: 0 
}

export default function sum (state=INITIAL_STATE , action) {
  switch(action.type) {
    case 'ADD_ONE':
      return {number: action.number};
    default:
      return state;
  }
}
