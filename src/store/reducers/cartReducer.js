import { ADD_TO_CART, DEL_FROM_CART, CHECKOUT } from '../actions/types'

const initState = {
  // Schema
  // CartProduct = { "product": {type: Prodcut}, "quantity": {type: Number}}
  items: []
};

// Function for checking product
const existProduct = (items, id) => {
  let [isExist, productIndex] = [false, null];
  // Loop through items
  items.forEach((item, index) => {
    // If item exist, return isExist and productIndex
    if (item.product._id == id) {
      isExist = true;
      productIndex = index
    }
  });
  return {isExist, productIndex};
};

// Reducer
const cartReducer = (state = initState, action) => {
  let { items } = state;
  switch(action.type) {
    case ADD_TO_CART:
      let { product } = action;
      // Check if item exist or not
      let { isExist, productIndex } = existProduct(items, product._id);
      if (isExist) {
        let newItems = [...state.items];
        newItems[productIndex].quantity += 1;
        // Item exist
        return { items: newItems };
      } else {
        return {
          items: [
            ...state.items,
            {product: product, quantity: 1}
          ]
        }
      }

    case DEL_FROM_CART:
      let { productId } = action;
      return {
        items: items.filter(item => item.product._id !== productId)
      }

    case CHECKOUT:
      return state

    default:
      return state;
  }
  return state;
}

export default cartReducer;
