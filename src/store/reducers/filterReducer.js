import { ADD_FILTER, REMOVE_FILTER} from '../actions/types'

const initState = {
  color: [],
  style: []
}

const filterReducer = (state = initState, action) => {
  switch(action.type) {

    case ADD_FILTER:
      return {
        ...state,
        [action.filterType]: [...state[action.filterType], action.filter]
      }

    case REMOVE_FILTER:
      return {
        ...state,
        [action.filterType]: state[action.filterType].filter(filter => filter !== action.filter)
      }

    default:
      return state;
  }
}

export default filterReducer;
