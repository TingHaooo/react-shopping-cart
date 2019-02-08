import { SELECT_SORT } from '../actions/types';

const initState = {
  order: 'l-h'
}

const sortReducer = (state = initState, action) => {
  switch(action.type) {
    case SELECT_SORT:
      return {
        ...state,
        order: action.payload
      }
    default:
      return state;
  }
}

export default sortReducer;
