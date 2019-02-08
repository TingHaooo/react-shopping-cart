import { ADD_FILTER, REMOVE_FILTER } from './types'

export const addFilter = (filter, type) => dispatch => {
  return dispatch({type: ADD_FILTER, filter: filter, filterType: type})
}

export const removeFilter = (filter, type) => dispatch => {
  return dispatch({type: REMOVE_FILTER, filter: filter, filterType: type})
}
