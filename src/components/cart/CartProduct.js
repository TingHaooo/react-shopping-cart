import React from 'react'
import { connect } from 'react-redux'
import { delFromCart } from '../../store/actions/cartActions'
import { formatPrice, toTwoDecimalPlace} from '../../util'

class CartProduct extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { product, delFromCart} = this.props;
    delFromCart(product._id);
  }

  render() {
    const { product, quantity } = this.props;
    const price =
    formatPrice(
      toTwoDecimalPlace((quantity * product.price))
      .toString()
    );

    return(
      <div className="cart-product">
        <div className="cart-product__delButton" onClick={this.handleClick}>X</div>
        <div className="cart-product__image">
          <img src={require(`../../static/products/${product.sku}.png`)} alt=""/>
        </div>
        <div className="cart-product__content">
          <div className="name">{product.title}</div>
          <div className="info">{product.description}</div>
          <div className="quantity">Quantity: {quantity}</div>
        </div>
        <div className="cart-product__price">
          { product.currencyFormat + price }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delFromCart: (productId) => dispatch(delFromCart(productId))
  }
}

const mapStateToProps = (state) => {
  return {
    cartQuantity: state.cart.quantity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)
