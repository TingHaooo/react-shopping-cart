import axios from 'axios'
import { FETCH_PRODUCT } from './types'

const productApi = '/api/products.json'

export const fetchProductAction = (callback) => dispatch => {
  axios.get(productApi)
    .then(res => {
      let products = res.data;
      callback();
      return dispatch({type: FETCH_PRODUCT, payload: products})
    })
}
