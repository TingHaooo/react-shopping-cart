import { SELECT_SORT } from './types'

export const selectSort = order => dispatch => {
  return dispatch({type: SELECT_SORT, payload: order});
}
