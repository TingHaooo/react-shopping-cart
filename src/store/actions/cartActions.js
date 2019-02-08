import { ADD_TO_CART, DEL_FROM_CART, CHECKOUT} from './types'

export const addToCart = product => dispatch => {
  return dispatch({type: ADD_TO_CART, product: product})
}

export const delFromCart = productId => dispatch => {
  return dispatch({type: DEL_FROM_CART, productId: productId})
}

export const checkout = () => dispatch => {
  return dispatch({type: CHECKOUT})
}
