import { FETCH_PRODUCT } from '../actions/types'

const initState = {
  items: []
}

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }
}

export default productReducer;
