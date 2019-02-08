import { combineReducers } from 'redux'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import filterReducer from './filterReducer'
import sortReducer from './sortReducer'
import checkoutReducer from './checkoutReducer'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filters: filterReducer,
  sort: sortReducer,
  checkout: checkoutReducer
});

export default rootReducer
