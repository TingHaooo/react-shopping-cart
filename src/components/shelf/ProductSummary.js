import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'
import { formatPrice } from '../../util'

class ProductSummary extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { product } = this.props;
    const [ integer, decimal ] = formatPrice(product.price).split('.');
    return (
      <div className="product">
        <div className="product__imgContainer">
          <img className="product__img" src={require(`../../static/products/${product.sku}.png`)} alt="" />
        </div>
        <h3 className="product__name">{product.title}</h3>
        <h3 className="product__description">{product.description}</h3>
        <div className="product__footer">
          <h3 className="product__price">
            {product.currencyFormat}
            <span className="integer">{integer}</span>.
            <span className="decimal">
              { decimal }
            </span>
          </h3>
          <button className="product__addButton" onClick={this.handleClick}>Add to cart</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductSummary);
